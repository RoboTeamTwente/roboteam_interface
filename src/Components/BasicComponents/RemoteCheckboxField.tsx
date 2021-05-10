import AbstractRemoteSubscribedReactComponent, {RemoteUIProps} from "./RemoteUIReactComponent";
import {ChangeEvent} from "react";
import {findUIOptionByName} from "../Util";
import RemoteUIReactComponent from "./RemoteUIReactComponent";

class RemoteCheckboxField extends RemoteUIReactComponent {

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

        this.state = {...this.state, didHaveFirstChange: false};
    }

    componentDidUpdate(prevProps: Readonly<{ui: RemoteUIProps}>, prevState: Readonly<any>, snapshot?: any) {
        const oldPropValue = prevProps.ui.values.uiValues[this.props.ui.name];
        const newPropValue = this.props.ui.values.uiValues[this.props.ui.name];

        const oldDefinition = findUIOptionByName(this.props.ui.name, prevProps.ui.decls)?.checkbox;
        const newDefinition = findUIOptionByName(this.props.ui.name, this.props.ui.decls)?.checkbox;

        // If we got a valid update from the server, set it as the current state
        if (newPropValue?.boolValue != null && oldPropValue?.boolValue != newPropValue?.boolValue) {
            this.setState({selection: newPropValue?.boolValue})
        } else if (oldDefinition?.default != newDefinition?.default && newDefinition?.default != null) {
            this.setState({selection: newDefinition!.default})
        }
    }

    render() {
        return (<input type="checkbox" id={this.props.ui.name} className="remote checkboxField"
                       checked={this.state.selection} onChange={this.onChange} readOnly={!findUIOptionByName(this.props.ui.name, this.props.ui.decls)?.isMutable ?? false}/>)
    }

    private onChange(ev: ChangeEvent<HTMLInputElement>) {
        this.setState({...this.state, selection: ev.target.checked, didHaveFirstChange: true});

        this.props.ui.onChange(this.props.ui.name, {
            boolValue: ev.target.checked,
            integerValue: undefined,
            floatValue: undefined,
            textValue: undefined
        });
    }
}

export default RemoteCheckboxField;