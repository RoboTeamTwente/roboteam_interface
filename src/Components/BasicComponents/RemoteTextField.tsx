import AbstractRemoteSubscribedReactComponent from "./RemoteUIReactComponent";
import {ChangeEvent} from "react";
import {TextField} from "../../Networking/proto_build/UiOptions";
import {findUIOptionByName} from "../Util";

class RemoteTextField extends AbstractRemoteSubscribedReactComponent {
    private readonly defaultValue: TextField = {text: "unknown"};

    constructor(props: any) {
        super(props);


        const thisOption = findUIOptionByName(this.props.name, this.props.options!)?.textfield ?? this.defaultValue;
        this.state = {textValue: thisOption.text};

        this.onChange = this.onChange.bind(this);
    }

    render() {
        return (
            <label>{this.props.name}
                <input type="text" name={this.props.name} id={this.props.name} className="remote textField"
                       value={this.state.textValue} onChange={this.onChange}/>
            </label>)
    }

    private onChange(ev: ChangeEvent<HTMLInputElement>) {
        this.setState({...this.state, textValue: ev.target.value});

        this.props.onChange(this.props.name, {
            boolValue: undefined,
            integerValue: undefined,
            floatValue: undefined,
            textValue: ev.target.value
        });
    }
}

export default RemoteTextField;