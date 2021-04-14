import AbstractRemoteSubscribedReactComponent, {RemoteUIProps} from "./RemoteUIReactComponent";
import {ChangeEvent} from "react";
import {TextField} from "../../Networking/proto_build/UiOptions";
import {extractDataForComponent, findUIOptionByName} from "../Util";

class RemoteTextField extends AbstractRemoteSubscribedReactComponent {
    private readonly defaultValue: TextField = {text: "unknown"};

    constructor(props: any) {
        super(props);

        this.onChange = this.onChange.bind(this);

        // TODO: How should the text in the text value definition be displayed?
        const [definition, value] = extractDataForComponent(props.name, props.state);

        // Decide on default value
        if (value?.textValue != null) {
            this.state = {selection: value.textValue};
        } else {
            this.state = {selection: definition?.textfield?.text ?? this.defaultValue.text};
        }
    }

    componentDidUpdate(prevProps: Readonly<RemoteUIProps>, prevState: Readonly<any>, snapshot?: any) {
        const [, oldPropValue] = extractDataForComponent(prevProps.name, prevProps.state);
        const [, newPropValue] = extractDataForComponent(this.props.name, this.props.state);

        // If we got a valid update from the server, set it as the current state
        if (newPropValue?.textValue != null && oldPropValue?.textValue != newPropValue?.textValue) {
            this.setState({textValue: newPropValue?.textValue})
        }
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