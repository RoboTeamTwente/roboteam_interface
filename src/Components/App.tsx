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
import _ from "lodash";
import Field from "./Field/Field";
import KeyControlsBottomField from "./LayoutComponents/KeyControlsBottomField";
import {RefObject} from "react";
// eslint-disable-next-line import/no-webpack-loader-syntax
import Worker from "worker-loader!../Utils/worker";

type AppState = {
    readonly values: UiValues
    readonly declarations: UiOptionDeclarations
    readonly fieldVisualisationData: State | undefined
    readonly ws: WebSocket | undefined
}

class App extends React.Component<{}, AppState> {


    throttledUpdate: any = null;
    readonly throttledProtobufParsing: any;
    readonly throttledSetState = _.throttle(this.setState, CONSTANTS.THROTTLE_SET_STATE);

    readonly worker: Worker = new Worker();

    fieldRef: RefObject<Field>;

    constructor(props: any) {
        super(props);

        this.didChangeServer = this.didChangeServer.bind(this);
        this.coerceRefreshOnWebSocketEvent = this.coerceRefreshOnWebSocketEvent.bind(this);
        this.childWillUpdate = this.childWillUpdate.bind(this);
        this.onWsMessage = this.onWsMessage.bind(this);
        this.onWorkerMessage = this.onWorkerMessage.bind(this);

        const initUIValues = UiValues.fromJSON(localStorage.getItem(CONSTANTS.RECENT_UI_STATE_VALUES_KEY) ?? "[]");
        const pastUIDecls = UiOptionDeclarations.fromJSON(localStorage.getItem(CONSTANTS.RECENT_UI_STATE_DECL_KEY) ?? "[]");

        this.state = {values: initUIValues, declarations: pastUIDecls, fieldVisualisationData: undefined, ws: undefined};

        this.fieldRef = React.createRef<Field>();

        this.worker.addEventListener("message", this.onWorkerMessage);
        this.worker.postMessage = this.worker.postMessage.bind(this.worker);
        this.throttledProtobufParsing = _.throttle(this.worker.postMessage, CONSTANTS.THROTTLE_PROTOBUF_MSG_PARSE);
    }

    componentDidMount() {
        const [host, port] = getStartingPortHostnameCombination();

        this.installWebsocket(new WebSocket(hostnamePortPairToWSURL(host, port, "")));

        window.onbeforeunload = () => {
            localStorage.setItem(CONSTANTS.RECENT_UI_STATE_VALUES_KEY, JSON.stringify(UiValues.toJSON(this.state.values)));
            localStorage.setItem(CONSTANTS.RECENT_UI_STATE_DECL_KEY, JSON.stringify(UiOptionDeclarations.toJSON(this.state.declarations)));
        };

        this.throttledUpdate = _.throttle(this.fieldRef.current!.update, CONSTANTS.THROTTLE_FIELD_UPDATE);
    }

    render() {
        const uiProps = {decls: this.state.declarations, values: this.state.values, onChange: this.childWillUpdate, name: ""};

        return (
            <Grid container className="background" style={{height: "100vh", margin: 0, width: '100%'}}>
                <Grid container xs={7} style={{height: "100vh"}}>
                    <Grid item xs={12} style={{minHeight: "80vh"}}>
                        <Field transformation={0} ref={this.fieldRef}/>
                    </Grid>
                    <Grid item xs={12}>
                        <KeyControlsBottomField ui={uiProps}/>
                    </Grid>
                </Grid>
                <Grid item xs={5}>
                    <Box pt={4} pb={11} pr={5} pl={4} style={{height: "100%"}}>
                        <Paper style={{height: "100%"}}>
                            <SettingsWidget cs={{socketSettingsDidChange: this.didChangeServer, wsocket: this.state.ws, defaultHostPortPair: getStartingPortHostnameCombination()}} sims={uiProps} />
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
        this.throttledProtobufParsing(new Uint8Array(event.data))
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

    private onWorkerMessage(event: MessageEvent) {
        const data: ModuleState = event.data;

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

        let newField = this.state.fieldVisualisationData;
        if (data.systemState != null) {
            newField = data.systemState;
        }

        this.throttledUpdate(newField ?? null);
        this.throttledSetState({...this.state, values: newValues, declarations: newDecls});
    }

    private childWillUpdate(name: string, newValue: UiValue): void {
        const vals = this.state.values;
        vals.uiValues[name] = newValue;

        if (
            this.state.ws != null &&
            this.state.ws?.readyState === this.state.ws?.OPEN
        ) {
            //const mod: ModuleState = {systemState: this.state.fieldVisualisationData, handshakes: [{moduleName: "default", declarations: this.state.declarations, values: vals}]};
            const uivals: UiValues = vals;
            console.log(JSON.stringify(uivals));
            const writer = UiValues.encode(uivals).finish();
            this.state.ws.send(writer);
        }
    }
}

export default App;
