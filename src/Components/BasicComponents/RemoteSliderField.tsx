import AbstractRemoteSubscribedReactComponent, {RemoteUIProps} from "./RemoteUIReactComponent";
import {ChangeEvent} from "react";
import {findUIOptionByName} from "../Util";
import {Slider} from "../../Networking/proto_build/UiOptions";

class RemoteSliderField extends AbstractRemoteSubscribedReactComponent {

    private readonly defaultValue: Slider = {text: "unknown", interval: 1, min: 0, max: 100, default: 50};

    constructor(props: any) {
        super(props);
        this.getOptions = this.getOptions.bind(this);
        this.onChange = this.onChange.bind(this);

        const definition = findUIOptionByName(this.props.ui.name, this.props.ui.decls);
        const value = this.props.ui.values.uiValues?.[this.props.ui.name];

        // Decide on default value
        if (value?.integerValue != null) {
            this.state = {integerValue: value.integerValue};
        } else {
            this.state = {integerValue: definition?.slider?.default ?? this.defaultValue.default};
        }
    }

    private getOptions(): Slider {
        return findUIOptionByName(this.props.ui.name, this.props.ui.decls)?.slider ?? this.defaultValue;
    }

    componentDidUpdate(prevProps: Readonly<{ui: RemoteUIProps}>, prevState: Readonly<any>, snapshot?: any) {
        const oldPropValue = prevProps.ui.values.uiValues[this.props.ui.name];
        const newPropValue = this.props.ui.values.uiValues[this.props.ui.name];

        // If we got a valid update from the server, set it as the current state
        if (newPropValue?.integerValue != null && oldPropValue?.integerValue != newPropValue?.integerValue) {
            this.setState({integerValue: newPropValue?.integerValue})
        }
    }

    render() {
        return (
                <input type="range" id={this.props.ui.name} className="remote sliderField"
                       min={this.getOptions().min} max={this.getOptions().max}
                       step={this.getOptions().interval} value={this.state.integerValue}
                       onChange={this.onChange} readOnly={!findUIOptionByName(this.props.ui.name, this.props.ui.decls)?.isMutable ?? false}/>)
    }

    private onChange(ev: ChangeEvent<HTMLInputElement>) {
        this.setState({...this.state, integerValue: ev.target.value});

        this.props.ui.onChange(this.props.ui.name, {
            boolValue: undefined,
            integerValue: this.state.integerValue,
            floatValue: undefined,
            textValue: undefined
        });
    }
}

export default RemoteSliderField;