import AbstractRemoteSubscribedReactComponent from "./RemoteUIReactComponent";
import {ChangeEvent} from "react";
import {findUIOptionByName} from "../Util";
import {RadioButton} from "../../Networking/proto_build/UiOptions";
import Long from "long";

class RemoteRadioButtonField extends AbstractRemoteSubscribedReactComponent {

    private readonly defaultValue: RadioButton = {default: Long.ONE, options: ["Unknown"]};

    constructor(props: any) {
        super(props);
        this.getOptions = this.getOptions.bind(this);

        const thisOption = findUIOptionByName(this.props.name, this.props.options!)?.radiobutton ?? this.defaultValue;
        const defaultIndex = thisOption.default;

        this.state = {selection: defaultIndex};

        this.onChange = this.onChange.bind(this);
    }

    private getOptions(): RadioButton {
        return findUIOptionByName(this.props.name, this.props.options!)?.radiobutton ?? this.defaultValue;
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