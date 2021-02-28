import AbstractRemoteSubscribedReactComponent from "./AbstractRemoteSubscribedReactComponent";
import {ChangeEvent} from "react";
import {findUIOptionByName} from "../Util";

class RemoteCheckboxField extends AbstractRemoteSubscribedReactComponent {

    constructor(props: any) {
        super(props);

        const defaultValue = findUIOptionByName(this.props.name, this.props.options!)?.checkbox?.default;
        this.state = {booleanValue: defaultValue}

        this.onChange = this.onChange.bind(this);
    }

    protected subscribedValues(): string[] {
        return [this.props.name];
    }

    private onChange(ev: ChangeEvent<HTMLInputElement>) {
        this.setState({...this.state, booleanValue: ev.target.checked});

        this.props.onChange(this.props.name, {boolValue: ev.target.checked, integerValue: undefined, floatValue: undefined, textValue: undefined});
    }

    render() {
        return (<input type="checkbox" id={this.props.name} className="remote checkboxField" checked={this.state.booleanValue} onChange={this.onChange}/>)
    }
}

export default RemoteCheckboxField;