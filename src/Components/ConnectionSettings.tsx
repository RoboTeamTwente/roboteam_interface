import * as React from 'react';
import {ChangeEvent} from "react";
import {hostnamePortPairToWSURL} from "./Util";

type ConnectionSettingsProps = {
    socketSettingsDidChange: (hostname: string, port: number)  => void;
    wsocket: WebSocket | null;
    defaultHostPortPair: [string, number];
}

class ConnectionSettings extends React.PureComponent<ConnectionSettingsProps, {hostname: string, port: number | null}> {

    constructor(props: any) {
        super(props);

        this.state = {hostname: "", port: 0};

        this.handleHostnameChange = this.handleHostnameChange.bind(this);
        this.handlePortChange = this.handlePortChange.bind(this);
        this.areFieldsValid = this.areFieldsValid.bind(this);
        this.handleConnect = this.handleConnect.bind(this);
    }

    componentDidMount() {
        const [host, port] = this.props.defaultHostPortPair;
        this.setState({hostname: host, port: port});
    }

    private handleHostnameChange(event: ChangeEvent<HTMLInputElement>) {
        if (event.target.value == null) return;

        this.setState({...this.state, hostname: event.target.value});
    }

    private handlePortChange(event: ChangeEvent<HTMLInputElement>) {
        // see https://medium.com/@nikjohn/cast-to-number-in-javascript-using-the-unary-operator-f4ca67c792ce for nice number conversion chart
        // Number() has most desirable behaviour in this case
        // Only concern is 'Infinity', however 'I' is not a number and will not be committed to state, preventing the user from typing 'Infinity'
        let parsedPort: number | null =  Number(event.target.value.trim());

        if (Math.pow(2, 16) < parsedPort || parsedPort < 0 ) return; // Ensure is within valid port range
        if (isNaN(parsedPort)) return; // We don't want non-numbers (number + trailing string, characters, etc.)

        if (parsedPort === 0) parsedPort = null; // Number() converts empty string to 0. Port 0 is invalid and has to be filtered out anyways

        this.setState({...this.state, port: parsedPort});
    }

    private getWebsocketReadyStateDisplayString(): string {
        return new Map([
            [WebSocket.CONNECTING, "Connecting..."],
            [WebSocket.OPEN, "Connected"],
            [WebSocket.CLOSING, "Closing..."],
            [WebSocket.CLOSED, "Closed"]
        ]).get(this.props.wsocket?.readyState ?? 0) ?? "Unknown";
    }

    private areFieldsValid(): boolean {
        return this.state.hostname === "" || this.state.port == null;
    }

    private renderSocketURL(): string {
        return hostnamePortPairToWSURL(this.state.hostname, this.renderPort(), "");
    }

    private renderPort(): string {
        return this.state.port == null ? "" : this.state.port.toString();
    }

    private handleConnect(ev: any){
        ev.preventDefault();
        this.props.socketSettingsDidChange(this.state.hostname, this.state.port!);
    }

    render() {
        return <div>
            <h1>State: {this.getWebsocketReadyStateDisplayString()}</h1>
            <p>
                Current: {this.props.wsocket?.url}
            </p>
            <p>Proposed change: {this.renderSocketURL()} </p>
            <form>
                Hostname:
                <input type="text" value={this.state.hostname} onChange={this.handleHostnameChange}/>
                Port:
                <input type="text" value={this.renderPort()} onChange={this.handlePortChange}/>
                <button disabled={this.areFieldsValid()} onClick={this.handleConnect}>Connect</button>
            </form>
            </div>;
    }
}

export default ConnectionSettings;