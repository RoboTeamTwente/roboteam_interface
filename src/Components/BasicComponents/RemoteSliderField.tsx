import AbstractRemoteSubscribedReactComponent from "./RemoteUIReactComponent";
import {ChangeEvent} from "react";
import {findUIOptionByName} from "../Util";
import {Slider} from "../../Networking/proto_build/UiOptions";

class RemoteSliderField extends AbstractRemoteSubscribedReactComponent {

    private readonly defaultValue: Slider = {text: "unknown", interval: 1, min: 0, max: 100, default: 50};

    constructor(props: any) {
        super(props);

        this.getOptions = this.getOptions.bind(this);
        const thisOption = findUIOptionByName(this.props.name, this.props.options!)?.slider ?? this.defaultValue;
        this.state = {integerValue: thisOption.default}

        this.onChange = this.onChange.bind(this);
    }

    private getOptions(): Slider {
        return findUIOptionByName(this.props.name, this.props.options!)?.slider ?? this.defaultValue;
    }

    render() {
        return (
            <label>{this.getOptions().text}
                <input type="range" id={this.props.name} className="remote sliderField"
                       min={this.getOptions().min} max={this.getOptions().max}
                       step={this.getOptions().interval} value={this.state.integerValue}
                       onChange={this.onChange}/>
            </label>)
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