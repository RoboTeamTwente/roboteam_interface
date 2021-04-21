import * as React from "react";
import "../Styles/main.css";
import "../Styles/main.css";
import {ModuleState} from "../Networking/proto_build/State";
import {CONSTANTS} from "./Constants";
import {hostnamePortPairToWSURL, saveServerPreferences, getStartingPortHostnameCombination} from "./Util";
import {PossibleUiValue} from "../Networking/proto_build/UiOptions";
import "../Styles/main.css"
import logo from '../Images/roboteam_logo_trans.png';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FieldLayout from "./LayoutComponents/FieldLayout";
import ConnectionSettings from "./ConnectionSettings";
import SettingsWidget from "./Settings/SettingsWidget";
import RemoteCheckboxField from "./BasicComponents/RemoteCheckboxField";
import { sizing } from '@material-ui/system';
import Field from "./Field/Field";
import {getPhantomModuleState} from "./PhantomData/State";

type AppState = {
    readonly data: ModuleState
    readonly ws: WebSocket | undefined
}

class App extends React.Component<{}, AppState> {
    private readonly defaultStateData: ModuleState = {
        systemState: {state: undefined, uiSettings: {uiValues: {}}},
        handshakes: []
    };

    constructor(props: any) {
        super(props);

        this.didChangeServer = this.didChangeServer.bind(this);
        this.coerceRefreshOnWebSocketEvent = this.coerceRefreshOnWebSocketEvent.bind(this);
        this.childWillUpdate = this.childWillUpdate.bind(this);
        this.onWsMessage = this.onWsMessage.bind(this);
        this.getEnsureNotEmpty = this.getEnsureNotEmpty.bind(this);

        const pastUIState = localStorage.getItem(CONSTANTS.RECENT_UI_STATE_KEY);
        const data = pastUIState == null ? this.defaultStateData : ModuleState.fromJSON(pastUIState!);
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
      <div className="background" style={{height: "100vh"}}>
          <Grid container spacing={0}>
            <Grid item xs={7}>
                <Paper className={"column"}>
                  <Field transformation={0} field={getPhantomModuleState()?.systemState?.state ?? null}/>
                </Paper>
              <Grid item xs={12}>
                <Paper className={"column"}>
                  <ConnectionSettings
                    socketSettingsDidChange={this.didChangeServer}
                    wsocket={this.state.ws}
                    defaultHostPortPair={getStartingPortHostnameCombination()}
                  />
                </Paper>
              </Grid>
            </Grid>
            <Grid item xs={5} container>
              <Grid item xs={12}>
                <Paper className={"column"}>
                  <SettingsWidget></SettingsWidget>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={"column"}>
                  <img className="roboteamLogo" src={logo} alt="Logo" />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </div>
    );
  }

  private coerceRefreshOnWebSocketEvent(): any {
    this.setState({ ...this.state, ws: this.state.ws });
  }

  private onWsMessage(event: MessageEvent) {
    let data: ModuleState | undefined = undefined;
    try {
      data = ModuleState.decode(new Uint8Array(event.data));
    } catch (err) {
      console.log("[-] Error when decoding data");
      return;
    }

    data = this.getEnsureNotEmpty(data);

    this.setState({ ...this.state, data });
  }

  private installWebsocket(ws: WebSocket) {
    this.setState({ ...this.state, ws: ws });

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

  private getEnsureNotEmpty(current: ModuleState): ModuleState {
    let mod = current;

    if (mod.systemState == null) {
      mod.systemState = this.defaultStateData.systemState;
    } else if (mod.systemState.uiSettings == null) {
      mod.systemState.uiSettings = this.defaultStateData.systemState!.uiSettings!;
    } else if (mod.systemState.uiSettings.uiValues == null) {
      mod.systemState.uiSettings.uiValues = this.defaultStateData.systemState!.uiSettings?.uiValues!;
    }

    return mod;
  }

  private childWillUpdate(name: string, newValue: PossibleUiValue): void {
    const mod = this.getEnsureNotEmpty(this.state.data);

    mod.systemState!.uiSettings!.uiValues[name] = newValue;

    this.setState({ ...this.state, data: mod });

    if (
      this.state.ws != null &&
      this.state.ws?.readyState === this.state.ws?.OPEN &&
      this.state.data != null
    ) {
      console.log(JSON.stringify(mod));
      const writer = ModuleState.encode(mod).finish();
      this.state.ws.send(writer);
    }
  }
}

export default App;
