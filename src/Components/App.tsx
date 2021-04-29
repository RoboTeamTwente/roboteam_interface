import * as React from "react";
import "../Styles/main.css";
import {ModuleState, State} from "../Networking/proto_build/State";
import {CONSTANTS} from "./Constants";
import {getStartingPortHostnameCombination, hostnamePortPairToWSURL, saveServerPreferences} from "./Util";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SettingsWidget from "./LayoutComponents/Settings/SettingsWidget";
import FieldLayout from "./LayoutComponents/FieldLayout";
import {Box} from "@material-ui/core";
import {UiOptionDeclaration, UiOptionDeclarations, UiValue, UiValues} from "../Networking/proto_build/UiOptions";

type AppState = {
    readonly values: UiValues
    readonly declarations: UiOptionDeclarations
    readonly fieldVisualisationData: State | undefined
    readonly ws: WebSocket | undefined
}

class App extends React.Component<{}, AppState> {

    constructor(props: any) {
        super(props);

        this.didChangeServer = this.didChangeServer.bind(this);
        this.coerceRefreshOnWebSocketEvent = this.coerceRefreshOnWebSocketEvent.bind(this);
        this.childWillUpdate = this.childWillUpdate.bind(this);
        this.onWsMessage = this.onWsMessage.bind(this);

        const initUIValues = UiValues.fromJSON(localStorage.getItem(CONSTANTS.RECENT_UI_STATE_VALUES_KEY) ?? "[]");
        const pastUIDecls = UiOptionDeclarations.fromJSON(localStorage.getItem(CONSTANTS.RECENT_UI_STATE_DECL_KEY) ?? "[]");

        // TODO: Save old field data?
        this.state = {values: initUIValues, declarations: pastUIDecls, fieldVisualisationData: undefined, ws: undefined};

    }

    componentDidMount() {
        const [host, port] = getStartingPortHostnameCombination();

        this.installWebsocket(new WebSocket(hostnamePortPairToWSURL(host, port, "")));

        window.onbeforeunload = () => {
            localStorage.setItem(CONSTANTS.RECENT_UI_STATE_VALUES_KEY, JSON.stringify(UiValues.toJSON(this.state.values)));
            localStorage.setItem(CONSTANTS.RECENT_UI_STATE_DECL_KEY, JSON.stringify(UiOptionDeclarations.toJSON(this.state.declarations)));
        };
    }

    render() {
        return (
            <Grid container className="background" style={{height: "100vh", margin: 0, width: '100%'}}>
                <FieldLayout ui={{decls: this.state.declarations, values: this.state.values, onChange: this.childWillUpdate, name: ""}} field={this.state.fieldVisualisationData}/>
                <Grid item xs={5}>
                    <Box pt={4} pb={11} pr={5} pl={4} style={{height: "100%"}}>
                        <Paper style={{height: "100%"}}>
                            <SettingsWidget cs={{socketSettingsDidChange: this.didChangeServer, wsocket: this.state.ws, defaultHostPortPair: getStartingPortHostnameCombination()}} sims={{decls: this.state.declarations, values: this.state.values, onChange: this.childWillUpdate, name: ""}} />
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        );
    }

    private coerceRefreshOnWebSocketEvent(): any {
        this.setState({...this.state, ws: this.state.ws});
    }

    private onWsMessage(event: MessageEvent) {
        let data: ModuleState | undefined = undefined;
        try {
            data = ModuleState.decode(new Uint8Array(event.data));
        } catch (err) {
            console.log("[-] Error when decoding data");
            return;
        }

        if (data.handshakes.length <= 0) {
            console.log("[-] Got message with no data");
        }

        let newDecls = this.state.declarations;
        if (data.handshakes?.[0]?.declarations != null ){
            newDecls = data.handshakes[0].declarations;
        }

        let newValues = this.state.values;
        if (data.handshakes?.[0]?.values != null) {
            newValues = data.handshakes[0].values;
        }

        this.setState({...this.state, values: newValues, declarations: newDecls});
    }

    private installWebsocket(ws: WebSocket) {
        this.setState({...this.state, ws: ws});

        ws.onopen = this.coerceRefreshOnWebSocketEvent;
        ws.onclose = this.coerceRefreshOnWebSocketEvent;
        ws.onerror = this.coerceRefreshOnWebSocketEvent;

        ws.binaryType = "arraybuffer";
        ws.onmessage = this.onWsMessage;
    }

    private didChangeServer(hostname: string, port: number): void {
        this.installWebsocket(
            new WebSocket(hostnamePortPairToWSURL(hostname, port, ""))
        );
        saveServerPreferences(hostname, port);
    }

    private childWillUpdate(name: string, newValue: UiValue): void {
        const vals = this.state.values;
        vals.uiValues[name] = newValue;

        if (
            this.state.ws != null &&
            this.state.ws?.readyState === this.state.ws?.OPEN
        ) {
            const mod: ModuleState = {systemState: this.state.fieldVisualisationData, handshakes: [{moduleName: "default", declarations: this.state.declarations, values: vals}]};
            console.log(JSON.stringify(mod));
            const writer = ModuleState.encode(mod).finish();
            this.state.ws.send(writer);
        }
    }
}

export default App;
