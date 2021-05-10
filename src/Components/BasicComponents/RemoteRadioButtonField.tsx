import AbstractRemoteSubscribedReactComponent, {RemoteUIProps} from "./RemoteUIReactComponent";
import {ChangeEvent} from "react";
import { findUIOptionByName} from "../Util";
import {RadioButton} from "../../Networking/proto_build/UiOptions";
import Long from "long";
import shallowequal from "shallowequal";
import RemoteUIReactComponent from "./RemoteUIReactComponent";

class RemoteRadioButtonField extends RemoteUIReactComponent {

    private readonly defaultValue: RadioButton = {default: Long.ONE, options: ["Unknown"]};

    constructor(props: any) {
        super(props);
        this.getOptions = this.getOptions.bind(this);
        this.onChange = this.onChange.bind(this);

        const definition = findUIOptionByName(this.props.ui.name, this.props.ui.decls);
        const value = this.props.ui.values.uiValues?.[this.props.ui.name];

        // Decide on default value
        if (value?.integerValue != null) {
            this.state = {selection: value.integerValue};
        } else {
            this.state = {selection: definition?.radiobutton?.default ?? this.defaultValue.default};
        }
    }

    private getOptions(): RadioButton {
        const options = findUIOptionByName(this.props.ui.name, this.props.ui.decls);
        return options?.radiobutton ?? this.defaultValue;
    }


    componentDidUpdate(prevProps: Readonly<{ui: RemoteUIProps}>, prevState: Readonly<any>, snapshot?: any) {
        const oldPropValue = prevProps.ui.values.uiValues[this.props.ui.name];
        const newPropValue = this.props.ui.values.uiValues[this.props.ui.name];

        // If we got a valid update from the server, set it as the current state
        if (newPropValue?.integerValue != null && oldPropValue?.integerValue != newPropValue?.integerValue) {
            this.setState({selection: newPropValue?.integerValue})
        }
    }

    render() {
        return (
            <div onChange={this.onChange} id={this.props.ui.name} className="remote radioButtonGroup" >
                {this.renderRadioButtons()}
            </div>);
    }

    private onChange(ev: ChangeEvent<HTMLInputElement>) {
        const indexOfSelection = Number(ev.target.value);
        this.setState({...this.state, selection: indexOfSelection});

        this.props.ui.onChange(this.props.ui.name, {
            boolValue: undefined,
            integerValue: Long.fromNumber(indexOfSelection),
            floatValue: undefined,
            textValue: undefined
        });
    }

    private renderRadioButtons() {
        const options = [];

        for (let i = 0; i < this.getOptions().options.length; i++) {
            let isDisabled = (!findUIOptionByName(this.props.ui.name, this.props.ui.decls)?.isMutable ?? false) && this.state.selection !== i;
            options.push(
                <label className="remote radioLabel">{this.getOptions().options[i]}
                    <input type="radio" name={this.props.ui.name} key={this.getOptions().options[i]}
                           className="remote radioButton" value={i} disabled={isDisabled} checked={this.state.selection === i}/>
                </label>
            );
        }

        return options;
    }
}

export default RemoteRadioButtonField;