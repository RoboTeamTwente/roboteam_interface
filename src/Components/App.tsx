import * as React from 'react';
import {ModuleState} from "../Networking/proto_build/State";
import ConnectionSettings from "./ConnectionSettings";
import {CONSTANTS} from "./Constants";
import {hostnamePortPairToWSURL, saveServerPreferences, getStartingPortHostnameCombination} from "./Util";
import {PossibleUiValue} from "../Networking/proto_build/UiOptions";
import RadioButtonField from "./BasicComponents/RemoteRadioButtonField";

type AppState = {
    readonly data: ModuleState | undefined
    readonly ws: WebSocket | undefined
}

class App extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props);

        this.didChangeServer = this.didChangeServer.bind(this);
        this.coerceRefreshOnWebSocketEvent = this.coerceRefreshOnWebSocketEvent.bind(this);
        this.childWillUpdate = this.childWillUpdate.bind(this);

        const pastUIState = localStorage.getItem(CONSTANTS.RECENT_UI_STATE_KEY);
        const data = pastUIState == null ? undefined : ModuleState.fromJSON(JSON.parse(pastUIState!));

        // const mod: ModuleState = {systemState: {state: undefined, uiSettings: {uiValues: {"testTextField": {floatValue: undefined, textValue: "aaaa", integerValue: undefined, boolValue: undefined}}}},handshakes: [{name: "aa", options: [{name: "testRadio", slider: undefined, dropdown: undefined, radiobutton: {default: new Long(1), options: ["Error1", "good", "error2"]}, textfield: undefined, checkbox: undefined}]}]}
        this.state = {data: data, ws: undefined};

    }

    componentDidMount() {
        const [host, port] = getStartingPortHostnameCombination();

        this.installWebsocket(new WebSocket(hostnamePortPairToWSURL(host, port, "")));

        window.onbeforeunload = () => {
            if (this.state.data != null) {
                localStorage.setItem(CONSTANTS.RECENT_UI_STATE_KEY, JSON.stringify(ModuleState.toJSON(this.state.data!)));
            }
        };
    }

    render() {
        return (
            <div>
                <ConnectionSettings socketSettingsDidChange={this.didChangeServer} wsocket={this.state.ws}
                                    defaultHostPortPair={getStartingPortHostnameCombination()}/>
                <RadioButtonField values={this.state.data?.systemState?.uiSettings ?? {uiValues: {}}}
                                  options={this.state.data?.handshakes?.[0]?.options ?? []}
                                  onChange={this.childWillUpdate} name={"testRadio"}/>
            </div>);
    }

    private coerceRefreshOnWebSocketEvent(): any {
        this.setState({...this.state, ws: this.state.ws});
    }

    private installWebsocket(ws: WebSocket) {
        this.setState({...this.state, ws: ws});

        ws.onmessage = (event: MessageEvent) => {
            const data = ModuleState.decode(event.data);

            if (data != null) {
                this.setState({...this.state, data: data});
            } else {
                console.log("[-] Received corrupted proto message!");
            }
        }

        ws.onopen = this.coerceRefreshOnWebSocketEvent;
        ws.onclose = this.coerceRefreshOnWebSocketEvent
        ws.onerror = this.coerceRefreshOnWebSocketEvent
    }

    private didChangeServer(hostname: string, port: number): void {
        this.installWebsocket(new WebSocket(hostnamePortPairToWSURL(hostname, port, "")));
        saveServerPreferences(hostname, port);
    }

    private childWillUpdate(name: string, newValue: PossibleUiValue): void {
        const mod = this.state.data;

        if (mod?.systemState?.uiSettings?.uiValues != null) {
            mod!.systemState!.uiSettings!.uiValues[name] = newValue;
            this.setState({...this.state, data: mod});
        } else {
            console.log("[-] No values to manipulate!");
        }

        if (this.state.ws != null && this.state.ws?.readyState === this.state.ws?.OPEN && this.state.data != null) {
            const writer = ModuleState.encode(this.state.data!);
            this.state.ws.send(writer.finish());
        }
    }
}

export default App;