import AbstractRemoteSubscribedReactComponent, {RemoteUIProps} from "./RemoteUIReactComponent";
import {ChangeEvent} from "react";
import {extractDataForComponent, findUIOptionByName} from "../Util";

class RemoteCheckboxField extends AbstractRemoteSubscribedReactComponent {

    private readonly defaultValue: boolean = false;

    constructor(props: any) {
        super(props);
        this.onChange = this.onChange.bind(this);


        const [definition, value] = extractDataForComponent(props.name, props.state);

        // Decide on default value
        if (value?.boolValue != null) {
            this.state = {selection: value.boolValue};
        } else {
            this.state = {selection: definition?.dropdown?.default ?? this.defaultValue};
        }
    }

    componentDidUpdate(prevProps: Readonly<RemoteUIProps>, prevState: Readonly<any>, snapshot?: any) {
        const [, oldPropValue] = extractDataForComponent(prevProps.name, prevProps.state);
        const [, newPropValue] = extractDataForComponent(this.props.name, this.props.state);

        // If we got a valid update from the server, set it as the current state
        if (newPropValue?.boolValue != null && oldPropValue?.boolValue != newPropValue?.boolValue) {
            this.setState({booleanValue: newPropValue?.boolValue})
        }
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