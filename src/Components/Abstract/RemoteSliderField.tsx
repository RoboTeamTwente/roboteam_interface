import AbstractRemoteSubscribedReactComponent from "./AbstractRemoteSubscribedReactComponent";
import {ChangeEvent} from "react";
import {findUIOptionByName} from "../Util";

class RemoteSliderField extends AbstractRemoteSubscribedReactComponent {

    constructor(props: any) {
        super(props);

        const thisOption = findUIOptionByName(this.props.name, this.props.options!)?.slider;
        this.state = {integerValue: thisOption?.default, sliderOptions: thisOption}

        this.onChange = this.onChange.bind(this);
    }

    protected subscribedValues(): string[] {
        return [this.props.name];
    }

    private onChange(ev: ChangeEvent<HTMLInputElement>) {
        this.setState({...this.state, integerValue: ev.target.value});

        this.props.onChange(this.props.name, {boolValue: undefined, integerValue: this.state.integerValue, floatValue: undefined, textValue: undefined});
    }

    render() {
        return (<input type="range" id={this.props.name} className="remote sliderField" min={this.state.sliderOptions.min} max={this.state.sliderOptions.max} step={this.state.sliderOptions.interval} value={this.state.integerValue} onChange={this.onChange}/>)
    }
}

export default RemoteSliderField;