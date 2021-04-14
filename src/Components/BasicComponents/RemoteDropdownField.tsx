import AbstractRemoteSubscribedReactComponent, {RemoteUIProps} from "./RemoteUIReactComponent";
import {ChangeEvent} from "react";
import Long from "long";
import {extractDataForComponent, findUIOptionByName} from "../Util";
import {Dropdown} from "../../Networking/proto_build/UiOptions";

class RemoteDropdownField extends AbstractRemoteSubscribedReactComponent {

    private readonly defaultValue: Dropdown = {text: "unknown", default: Long.ZERO, options: ["unknown"]};

    constructor(props: any) {
        super(props);

        this.getOptions = this.getOptions.bind(this);
        this.onChange = this.onChange.bind(this);

        const [definition, value] = extractDataForComponent(props.name, props.state);

        // Decide on default value
        if (value?.integerValue != null) {
            this.state = {selection: value.integerValue};
        } else {
            this.state = {selection: definition?.dropdown?.default ?? this.defaultValue.default};
        }
    }

    private getOptions(): Dropdown {
        const [definition,] = extractDataForComponent(this.props.name, this.props.state);
        return definition?.dropdown ?? this.defaultValue;
    }

    componentDidUpdate(prevProps: Readonly<RemoteUIProps>, prevState: Readonly<any>, snapshot?: any) {
        const [, oldPropValue] = extractDataForComponent(prevProps.name, prevProps.state);
        const [, newPropValue] = extractDataForComponent(this.props.name, this.props.state);

        // If we got a valid update from the server, set it as the current state
        if (newPropValue?.integerValue != null && oldPropValue?.integerValue != newPropValue?.integerValue) {
            this.setState({selection: newPropValue?.integerValue})
        }
    }

    render() {
        return (
            <label>{this.getOptions().text}
                <select className="remote dropdownMenu" value={this.state.selection} name={this.props.name}
                        id={this.props.name} onChange={this.onChange}>
                    {this.renderOptions()}
                </select>
            </label>
        )
    }

    private onChange(ev: ChangeEvent<HTMLSelectElement>) {
        const indexOfSelection = Number(ev.target.value)
        this.setState({...this.state, selection: indexOfSelection});

        this.props.onChange(this.props.name, {
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