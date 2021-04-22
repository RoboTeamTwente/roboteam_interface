import AbstractRemoteSubscribedReactComponent, {RemoteUIProps} from "./RemoteUIReactComponent";
import {ChangeEvent} from "react";
import {extractDataForComponent, findUIOptionByName} from "../Util";
import {Slider} from "../../Networking/proto_build/UiOptions";

class RemoteSliderField extends AbstractRemoteSubscribedReactComponent {

    private readonly defaultValue: Slider = {text: "unknown", interval: 1, min: 0, max: 100, default: 50};

    constructor(props: any) {
        super(props);
        this.getOptions = this.getOptions.bind(this);
        this.onChange = this.onChange.bind(this);

        const [definition, value] = extractDataForComponent(props.name, props.state);

        // Decide on default value
        if (value?.integerValue != null) {
            this.state = {selection: value.integerValue};
        } else {
            this.state = {selection: definition?.slider?.default ?? this.defaultValue.default};
        }
    }

    private getOptions(): Slider {
        return findUIOptionByName(this.props.name, this.props.state.handshakes?.[0]?.options)?.slider ?? this.defaultValue;
    }

    componentDidUpdate(prevProps: Readonly<RemoteUIProps>, prevState: Readonly<any>, snapshot?: any) {
        const [, oldPropValue] = extractDataForComponent(prevProps.name, prevProps.state);
        const [, newPropValue] = extractDataForComponent(this.props.name, this.props.state);

        // If we got a valid update from the server, set it as the current state
        if (newPropValue?.integerValue != null && oldPropValue?.integerValue != newPropValue?.integerValue) {
            this.setState({integerValue: newPropValue?.integerValue})
        }
    }

    render() {
        return (
                <input type="range" id={this.props.name} className="remote sliderField"
                       min={this.getOptions().min} max={this.getOptions().max}
                       step={this.getOptions().interval} value={this.state.integerValue}
                       onChange={this.onChange}/>)
    }

    private onChange(ev: ChangeEvent<HTMLInputElement>) {
        this.setState({...this.state, integerValue: ev.target.value});

        this.props.onChange(this.props.name, {
            boolValue: undefined,
            integerValue: this.state.integerValue,
            floatValue: undefined,
            textValue: undefined
        });
    }
}

export default RemoteSliderField;