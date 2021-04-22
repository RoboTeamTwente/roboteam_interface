import React from "react";
import {Grid} from "@material-ui/core";
import RemoteTextField from "./BasicComponents/RemoteTextField";
import {RemoteUIProps} from "./BasicComponents/RemoteUIReactComponent";

class SimulatorConnectionSettings extends React.PureComponent<RemoteUIProps, any> {
    render() {
        return <Grid container>
                <Grid item xs={8}>
                    <label>Host: </label>
                    <RemoteTextField state={this.props.state} onChange={this.props.onChange} name={"simulatorHost"}></RemoteTextField>
                </Grid>
            <Grid item xs={4}>
                <label>Port: </label>
                <RemoteTextField state={this.props.state} onChange={this.props.onChange} name={"simulatorPort"}></RemoteTextField>
            </Grid>
        </Grid>
    }
}

export default SimulatorConnectionSettings;