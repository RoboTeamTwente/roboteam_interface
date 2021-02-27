import * as React from 'react';
import {ModuleState} from "../Networking/proto_build/State";
import ConnectionSettings from "./ConnectionSettings";
import {CONSTANTS} from "./Constants";
import {hostnamePortPairToWSURL} from "./Util";

type AppState = {
    readonly data: ModuleState | null
    readonly ws: WebSocket | null
}

class App extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props);
        this.coerceRefreshOnWebSocketEvent = this.coerceRefreshOnWebSocketEvent.bind(this);

        if (localStorage.getItem(CONSTANTS.RECENT_UI_STATE_KEY) == null) {
            this.state = {data: null, ws: null};
        } else {
            this.state = {data: ModuleState.fromJSON(JSON.parse(localStorage.getItem(CONSTANTS.RECENT_UI_STATE_KEY)!)), ws: null};
        }
    }

    componentDidMount() {
        const [host, port] = this.getStartingPortHostnameCombination();

        console.log("Starting: "+ host + ":" + port)
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

    render() {
        return <ConnectionSettings socketSettingsDidChange={this.didChangeServer.bind(this)} wsocket={this.state.ws} defaultHostPortPair={this.getStartingPortHostnameCombination()}/>;
    }
}

export default App;