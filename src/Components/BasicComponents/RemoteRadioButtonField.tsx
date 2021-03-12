import AbstractRemoteSubscribedReactComponent from "./RemoteUIReactComponent";
import {ChangeEvent} from "react";
import {findUIOptionByName} from "../Util";
import Long from "long";
import {RadioButton} from "../../Networking/proto_build/UiOptions";

class RemoteTextField extends AbstractRemoteSubscribedReactComponent {

    private readonly defaultValue: RadioButton = {default: new Long(0), options: ["Unknown"]};

    constructor(props: any) {
        super(props);

        const thisOption = findUIOptionByName(this.props.name, this.props.options!)?.radiobutton ?? this.defaultValue;
        const defaultIndex = thisOption.default;
        const possibilities = thisOption.options;

        this.state = {selection: defaultIndex, possibilities: possibilities};

        this.onChange = this.onChange.bind(this);
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
            integerValue: new Long(indexOfSelection),
            floatValue: undefined,
            textValue: undefined
        });
    }

    private renderRadioButtons() {
        const options = [];

        for (let i = 0; i < this.state.possibilities.length; i++) {
            options.push(
                <label className="remote radioLabel">{this.state.possibilities[i]}
                    <input type="radio" name={this.props.name} key={this.state.possibilities[i]}
                           className="remote radioButton" value={i} checked={this.state.selection === i}/>
                </label>
            );
        }

        return options;
    }
}

export default RemoteTextField;