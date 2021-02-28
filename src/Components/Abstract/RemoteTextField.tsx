import AbstractRemoteSubscribedReactComponent from "./AbstractRemoteSubscribedReactComponent";
import {ChangeEvent} from "react";

class RemoteTextField extends AbstractRemoteSubscribedReactComponent {

    constructor(props: any) {
        super(props);

        this.state = {textValue: ""}

        this.onChange = this.onChange.bind(this);
    }

    protected subscribedValues(): string[] {
        return [this.props.name];
    }

    private onChange(ev: ChangeEvent<HTMLInputElement>) {
        this.setState({...this.state, textValue: ev.target.value});

        this.props.onChange(this.props.name, {boolValue: undefined, integerValue: undefined, floatValue: undefined, textValue: ev.target.value});
    }

    render() {
        return (<input type="text" id={this.props.name} className="remote textField" value={this.state.textValue} onChange={this.onChange}/>)
    }
}

export default RemoteTextField;