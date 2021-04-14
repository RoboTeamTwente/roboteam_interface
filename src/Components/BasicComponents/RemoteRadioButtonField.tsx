import AbstractRemoteSubscribedReactComponent, {RemoteUIProps} from "./RemoteUIReactComponent";
import {ChangeEvent} from "react";
import {extractDataForComponent, findUIOptionByName} from "../Util";
import {RadioButton} from "../../Networking/proto_build/UiOptions";
import Long from "long";
import shallowequal from "shallowequal";

class RemoteRadioButtonField extends AbstractRemoteSubscribedReactComponent {

    private readonly defaultValue: RadioButton = {default: Long.ONE, options: ["Unknown"]};

    constructor(props: any) {
        super(props);
        this.getOptions = this.getOptions.bind(this);
        this.onChange = this.onChange.bind(this);

        const [definition, value] = extractDataForComponent(props.name, props.state);

        // Decide on default value
        if (value?.integerValue != null) {
            this.state = {selection: value.integerValue};
        } else {
            this.state = {selection: definition?.radiobutton?.default ?? this.defaultValue.default};
        }
    }

    private getOptions(): RadioButton {
        const [options,] = extractDataForComponent(this.props.name, this.props.state);
        return options?.radiobutton ?? this.defaultValue;
    }


    componentDidUpdate(prevProps: Readonly<RemoteUIProps>, prevState: Readonly<any>, snapshot?: any) {
        const [, oldPropValue] = extractDataForComponent(prevProps.name, prevProps.state);
        const [, newPropValue] = extractDataForComponent(this.props.name, this.props.state);

        // If we got a valid update from the server, set it as the current state
        if (newPropValue?.integerValue != null && oldPropValue?.integerValue != newPropValue?.integerValue) {
            this.setState({integerValue: newPropValue?.integerValue})
        }
    }

    render() {
        return (
            <div onChange={this.onChange} id={this.props.name} className="remote radioButtonGroup">
                {this.renderRadioButtons()}
            </div>);
    }

    private onChange(ev: ChangeEvent<HTMLInputElement>) {
        const indexOfSelection = Number(ev.target.value);
        this.setState({...this.state, selection: indexOfSelection});

        this.props.onChange(this.props.name, {
            boolValue: undefined,
            integerValue: Long.fromNumber(indexOfSelection),
            floatValue: undefined,
            textValue: undefined
        });
    }

    private renderRadioButtons() {
        const options = [];

        for (let i = 0; i < this.getOptions().options.length; i++) {
            options.push(
                <label className="remote radioLabel">{this.getOptions().options[i]}
                    <input type="radio" name={this.props.name} key={this.getOptions().options[i]}
                           className="remote radioButton" value={i} checked={this.state.selection === i}/>
                </label>
            );
        }

        return options;
    }
}

export default RemoteRadioButtonField;