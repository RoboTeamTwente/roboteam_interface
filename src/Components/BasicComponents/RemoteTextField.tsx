import AbstractRemoteSubscribedReactComponent, {RemoteUIProps} from "./RemoteUIReactComponent";
import {ChangeEvent} from "react";
import {TextField} from "../../Networking/proto_build/UiOptions";
import {findUIOptionByName} from "../Util";

class RemoteTextField extends AbstractRemoteSubscribedReactComponent {
    private readonly defaultValue: TextField = {text: "unknown"};

    constructor(props: any) {
        super(props);

        this.onChange = this.onChange.bind(this);

        // TODO: How should the text in the text value definition be displayed?
        const definition = findUIOptionByName(this.props.ui.name, this.props.ui.decls);
        const value = this.props.ui.values.uiValues?.[this.props.ui.name];

        // Decide on default value
        if (value?.textValue != null) {
            this.state = {selection: value.textValue};
        } else {
            this.state = {selection: definition?.textfield?.text ?? this.defaultValue.text};
        }
    }

    componentDidUpdate(prevProps: Readonly<{ui: RemoteUIProps}>, prevState: Readonly<any>, snapshot?: any) {
        const oldPropValue = prevProps.ui.values.uiValues[this.props.ui.name];
        const newPropValue = this.props.ui.values.uiValues[this.props.ui.name];

        // If we got a valid update from the server, set it as the current state
        if (newPropValue?.textValue != null && oldPropValue?.textValue != newPropValue?.textValue) {
            this.setState({textValue: newPropValue?.textValue})
        }
    }

    render() {
        return (
                <input type="text" name={this.props.ui.name} id={this.props.ui.name} className="remote textField"
                       value={this.state.textValue} onChange={this.onChange}/>)
    }

    private onChange(ev: ChangeEvent<HTMLInputElement>) {
        this.setState({...this.state, textValue: ev.target.value});

        this.props.ui.onChange(this.props.ui.name, {
            boolValue: undefined,
            integerValue: undefined,
            floatValue: undefined,
            textValue: ev.target.value
        });
    }
}

export default RemoteTextField;