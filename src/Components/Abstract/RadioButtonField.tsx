import AbstractRemoteSubscribedReactComponent from "./AbstractRemoteSubscribedReactComponent";
import {ChangeEvent} from "react";
import {findUIOptionByName} from "../Util";
import Long from "long";

class RemoteTextField extends AbstractRemoteSubscribedReactComponent {

    constructor(props: any) {
        super(props);

        const thisOption = findUIOptionByName(this.props.name, this.props.options!)?.radiobutton!;
        const defaultIndex = thisOption.default;
        const possibilities = thisOption.options;

        this.state = {selection: defaultIndex, possibilities: possibilities};

        this.onChange = this.onChange.bind(this);
    }

    protected subscribedValues(): string[] {
        return [this.props.name];
    }

    private onChange(ev: ChangeEvent<HTMLInputElement>) {
        const indexOfSelection = Number(ev.target.value);
        this.setState({...this.state, selection: indexOfSelection});

        this.props.onChange(this.props.name, {boolValue: undefined, integerValue: new Long(indexOfSelection), floatValue: undefined, textValue: undefined});
    }

    private renderRadioButtons() {
        const options = [];

        console.log("Rendering buttons")
        for (let i = 0; i < this.state.possibilities.length; i++) {
            options.push(
                <label className="remote radioLabel">{this.state.possibilities[i]}
                    <input type="radio" name={this.props.name} className="remote radioButton" value={i} checked={this.state.selection == i}/>
                </label>
            );
        }

        return options;
    }

    render() {
        return (
            <div onChange={this.onChange} id={this.props.name} className="remote radioButtonGroup">
                {this.renderRadioButtons()}
            </div>
        )
    }
}

export default RemoteTextField;