import AbstractRemoteSubscribedReactComponent, {RemoteUIProps} from "./RemoteUIReactComponent";
import {ChangeEvent} from "react";
import {findUIOptionByName} from "../Util";

class RemoteCheckboxField extends AbstractRemoteSubscribedReactComponent {

    private readonly defaultValue: boolean = false;

    constructor(props: any) {
        super(props);
        this.onChange = this.onChange.bind(this);


        const definition = findUIOptionByName(this.props.ui.name, this.props.ui.decls);
        const value = this.props.ui.values.uiValues?.[this.props.ui.name];

        // Decide on default value
        if (value?.boolValue != null) {
            this.state = {selection: value.boolValue};
        } else {
            this.state = {selection: definition?.dropdown?.default ?? this.defaultValue};
        }
    }

    componentDidUpdate(prevProps: Readonly<{ui: RemoteUIProps}>, prevState: Readonly<any>, snapshot?: any) {
        const oldPropValue = prevProps.ui.values.uiValues[this.props.ui.name];
        const newPropValue = this.props.ui.values.uiValues[this.props.ui.name];

        // If we got a valid update from the server, set it as the current state
        if (newPropValue?.boolValue != null && oldPropValue?.boolValue != newPropValue?.boolValue) {
            this.setState({booleanValue: newPropValue?.boolValue})
        }
    }

    render() {
        return (<input type="checkbox" id={this.props.ui.name} className="remote checkboxField"
                       checked={this.state.booleanValue} onChange={this.onChange}/>)
    }

    private onChange(ev: ChangeEvent<HTMLInputElement>) {
        this.setState({...this.state, booleanValue: ev.target.checked});

        this.props.ui.onChange(this.props.ui.name, {
            boolValue: ev.target.checked,
            integerValue: undefined,
            floatValue: undefined,
            textValue: undefined
        });
    }
}

export default RemoteCheckboxField;