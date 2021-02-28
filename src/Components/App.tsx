import * as React from 'react';
import {ModuleState} from "../Networking/proto_build/State";
import ConnectionSettings from "./ConnectionSettings";
import {CONSTANTS} from "./Constants";
import {hostnamePortPairToWSURL} from "./Util";
import DebugUIComponent from "./DebugUIComponent";
import RemoteTextField from "./Abstract/RemoteTextField";
import {PossibleUiValue} from "../Networking/proto_build/UiOptions";
import CheckboxField from "./Abstract/CheckboxField";
import RemoteSliderField from "./Abstract/RemoteSliderField";
import Long from "long";
import RemoteDropdownField from "./Abstract/RemoteDropdownField";
import RadioButtonField from "./Abstract/RadioButtonField";

type AppState = {
    readonly data: ModuleState | null
    readonly ws: WebSocket | null
}

class App extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props);

        this.didChangeServer = this.didChangeServer.bind(this);
        this.coerceRefreshOnWebSocketEvent = this.coerceRefreshOnWebSocketEvent.bind(this);
        this.childWillUpdate = this.childWillUpdate.bind(this);

        const pastUIState = localStorage.getItem(CONSTANTS.RECENT_UI_STATE_KEY);
        const data = pastUIState == null ? null : ModuleState.fromJSON(JSON.parse(pastUIState!));

        // const mod: ModuleState = {systemState: {state: undefined, uiSettings: {uiValues: {"testTextField": {floatValue: undefined, textValue: "aaaa", integerValue: undefined, boolValue: undefined}}}},handshakes: [{name: "aa", options: [{name: "testRadio", slider: undefined, dropdown: undefined, radiobutton: {default: new Long(1), options: ["Error1", "good", "error2"]}, textfield: undefined, checkbox: undefined}]}]}
        this.state = {data: data, ws: null};
        // this.state = {data: mod, ws: null};

    }

    componentDidMount() {
        const [host, port] = this.getStartingPortHostnameCombination();

        this.installWebsocket(new WebSocket(hostnamePortPairToWSURL(host, port, "")));

        window.onbeforeunload = () => {
            if (this.state.data != null) {
                localStorage.setItem(CONSTANTS.RECENT_UI_STATE_KEY, JSON.stringify(ModuleState.toJSON(this.state.data!)));
            }
        };
    }

    private getStartingPortHostnameCombination(): [string, number] {
        const port = Number(localStorage.getItem(CONSTANTS.PORT_SETTINGS_KEY) ?? CONSTANTS.DEFAULT_PORT);
        const host = localStorage.getItem(CONSTANTS.HOSTNAME_SETTINGS_KEY) ?? CONSTANTS.DEFAULT_HOSTNAME;

        this.saveServerPreferences(host, port);

        return [host, port];
    }

    private saveServerPreferences(host: string, port: number) {
        localStorage.setItem(CONSTANTS.HOSTNAME_SETTINGS_KEY, host);
        localStorage.setItem(CONSTANTS.PORT_SETTINGS_KEY, port.toString());
    }

    private coerceRefreshOnWebSocketEvent(): any {
        this.setState({...this.state, ws: this.state.ws});
    }

    private installWebsocket(ws: WebSocket) {
        this.setState({...this.state, ws: ws});

        ws.onmessage = (event: MessageEvent) => {
            const data = ModuleState.decode(event.data);
            this.setState({...this.state, data: data});
        }

        ws.onopen = this.coerceRefreshOnWebSocketEvent;
        ws.onclose = this.coerceRefreshOnWebSocketEvent
        ws.onerror = this.coerceRefreshOnWebSocketEvent
    }

    private didChangeServer(hostname: string, port: number): void {
        this.installWebsocket(new WebSocket(hostnamePortPairToWSURL(hostname, port, "")));
        this.saveServerPreferences(hostname, port);
    }

    private childWillUpdate(name: string, newValue: PossibleUiValue): void {
        console.log("Child `" + name + "` -> " + newValue);
        const mod = this.state.data;
        mod!.systemState!.uiSettings!.uiValues[name] = newValue;

        this.setState({...this.state, data: mod});
    }

    render() {
        return (
        <div>
            <ConnectionSettings socketSettingsDidChange={this.didChangeServer} wsocket={this.state.ws} defaultHostPortPair={this.getStartingPortHostnameCombination()}/>
        </div>);
    }
}

export default App;