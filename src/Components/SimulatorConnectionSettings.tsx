import React from "react";
import {Grid} from "@material-ui/core";
import RemoteTextField from "./BasicComponents/RemoteTextField";
import {RemoteUIProps} from "./BasicComponents/RemoteUIReactComponent";

class SimulatorConnectionSettings extends React.PureComponent<{ui: RemoteUIProps}, any> {
    render() {
        return <Grid container>
                <Grid item xs={8}>
                    <label>Host: </label>
                    <RemoteTextField ui={{...this.props.ui, name: "simulatorHost"}}></RemoteTextField>
                </Grid>
            <Grid item xs={4}>
                <label>Port: </label>
                <RemoteTextField ui={{...this.props.ui, name: "simulatorPort"}}></RemoteTextField>
            </Grid>
        </Grid>
    }
}

export default SimulatorConnectionSettings;