import AbstractRemoteSubscribedReactComponent from "./RemoteUIReactComponent";
import {ChangeEvent} from "react";
import {findUIOptionByName} from "../Util";

class RemoteCheckboxField extends AbstractRemoteSubscribedReactComponent {

    private readonly defaultValue: boolean = false;

    constructor(props: any) {
        super(props);

        const defaultValue = findUIOptionByName(this.props.name, this.props.options!)?.checkbox?.default ?? this.defaultValue;
        this.state = {booleanValue: defaultValue}

        this.onChange = this.onChange.bind(this);
    }

    render() {
        return (<input type="checkbox" id={this.props.name} className="remote checkboxField"
                       checked={this.state.booleanValue} onChange={this.onChange}/>)
    }

    private onChange(ev: ChangeEvent<HTMLInputElement>) {
        this.setState({...this.state, booleanValue: ev.target.checked});

        this.props.onChange(this.props.name, {
            boolValue: ev.target.checked,
            integerValue: undefined,
            floatValue: undefined,
            textValue: undefined
        });
    }
}

export default RemoteCheckboxField;