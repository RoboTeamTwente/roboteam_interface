import AbstractRemoteSubscribedReactComponent from "./AbstractRemoteSubscribedReactComponent";
import {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes} from "react";
import Long from "long";
import {findUIOptionByName} from "../Util";

class RemoteDropdownField extends AbstractRemoteSubscribedReactComponent {

    constructor(props: any) {
        super(props);

        const thisOption = findUIOptionByName(this.props.name, this.props.options!)?.dropdown!;

        this.state = {selection: thisOption.default, options: thisOption.options};

        this.onChange = this.onChange.bind(this);
    }

    protected subscribedValues(): string[] {
        return [this.props.name];
    }

    private onChange(ev: ChangeEvent<HTMLSelectElement>) {
        const indexOfSelection = Number(ev.target.value)
        this.setState({...this.state, selection: indexOfSelection});

        this.props.onChange(this.props.name, {boolValue: undefined, integerValue: new Long(indexOfSelection), floatValue: undefined, textValue: undefined});
    }

    private renderOptions() {
        const selections = [];

        for (let i = 0; i < this.state.options.length; i++) {
            selections.push(<option className="remote dropdownOption" value={i}>{this.state.options[i]}</option>)
        }

        return selections;
    }

    render() {
        return (
            <select className="remote dropdownMenu" value={this.state.selection} name={this.props.name} id={this.props.name} onChange={this.onChange}>
                {this.renderOptions()}
            </select>
            )
    }
}

export default RemoteDropdownField;