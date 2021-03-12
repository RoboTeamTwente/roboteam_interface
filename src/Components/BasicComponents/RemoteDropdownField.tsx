import AbstractRemoteSubscribedReactComponent from "./RemoteUIReactComponent";
import {ChangeEvent} from "react";
import Long from "long";
import {findUIOptionByName} from "../Util";
import {Dropdown} from "../../Networking/proto_build/UiOptions";

class RemoteDropdownField extends AbstractRemoteSubscribedReactComponent {

    private readonly defaultValue: Dropdown = {text: "unknown", default: new Long(0), options: ["unknown"]};

    constructor(props: any) {
        super(props);

        const thisOption = findUIOptionByName(this.props.name, this.props.options!)?.dropdown ?? this.defaultValue;

        this.state = {selection: thisOption.default, options: thisOption.options};

        this.onChange = this.onChange.bind(this);
    }

    render() {
        return (
            <label>{this.state.options.text}
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

        for (let i = 0; i < this.state.options.length; i++) {
            selections.push(<option key={i} className="remote dropdownOption"
                                    value={i}>{this.state.options[i]}</option>)
        }

        return selections;
    }
}

export default RemoteDropdownField;