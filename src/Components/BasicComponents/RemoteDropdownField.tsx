import AbstractRemoteSubscribedReactComponent, {RemoteUIProps} from "./RemoteUIReactComponent";
import {ChangeEvent} from "react";
import Long from "long";
import { findUIOptionByName} from "../Util";
import {Dropdown} from "../../Networking/proto_build/UiOptions";

class RemoteDropdownField extends AbstractRemoteSubscribedReactComponent {

    private readonly defaultValue: Dropdown = {text: "unknown", default: Long.ZERO, options: ["unknown"]};

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
            this.state = {selection: definition?.dropdown?.default ?? this.defaultValue.default};
        }
    }

    private getOptions(): Dropdown {
        const definition = findUIOptionByName(this.props.ui.name, this.props.ui.decls);
        return definition?.dropdown ?? this.defaultValue;
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
                <select className="remote dropdownMenu" value={this.state.selection} name={this.props.ui.name}
                        id={this.props.ui.name} onChange={this.onChange}>
                    {this.renderOptions()}
                </select>)
    }

    private onChange(ev: ChangeEvent<HTMLSelectElement>) {
        const indexOfSelection = Number(ev.target.value)
        this.setState({...this.state, selection: indexOfSelection});

        this.props.ui.onChange(this.props.ui.name, {
            boolValue: undefined,
            integerValue: new Long(indexOfSelection),
            floatValue: undefined,
            textValue: undefined
        });
    }

    private renderOptions() {
        const selections = [];

        for (let i = 0; i < this.getOptions().options.length; i++) {
            selections.push(<option key={i} className="remote dropdownOption"
                                    value={i}>{this.getOptions().options[i]}</option>)
        }

        return selections;
    }
}

export default RemoteDropdownField;