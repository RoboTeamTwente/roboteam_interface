import * as React from "react";
//import "../src/Styles/main.css";
import Field from "../Field/Field";
import {Box, Grid, Paper} from "@material-ui/core";
import {ModuleState} from "../../Networking/proto_build/State";
import RemoteCheckboxField from "../BasicComponents/RemoteCheckboxField";
import RemoteUIReactComponent, {RemoteUIProps} from "../BasicComponents/RemoteUIReactComponent";
import RemoteDropdownField from "../BasicComponents/RemoteDropdownField";

class KeyControlsBottomField extends RemoteUIReactComponent {

    render() {
        return (
            <Grid container xs={12} alignItems={"center"} justify={"center"} spacing={5}>
                <Grid item>
                    <label>Pause: </label>
                    <RemoteCheckboxField ui={{...this.props.ui, name: "pause_button"}}/>
                </Grid>
                <Grid item>
                    <label>Simulator: </label>
                    <RemoteDropdownField ui={{...this.props.ui, name: "serial_mode"}}/>
                </Grid>
                <Grid item>
                    <label>Ignore Invariants: </label>
                    <RemoteCheckboxField ui={{...this.props.ui, name: "ignoreInvariants"}}/>
                </Grid>
                <Grid item>
                    <label>Use Referee: </label>
                    <RemoteCheckboxField ui={{...this.props.ui, name: "listen_to_referee_button"}}/>
                </Grid>
                <Grid item>
                    <label>Is Yellow: </label>
                    <RemoteCheckboxField ui={{...this.props.ui, name: "color_button"}}/>
                </Grid>
                <Grid item>
                    <label>Play Right: </label>
                    <RemoteCheckboxField ui={{...this.props.ui, name: "side_button"}}/>
                </Grid>
            </Grid>
        );
    }

    subscribedValues(): string[] {
        return ["pause_button", "serial_mode", "ignoreInvariants", "listen_to_referee_button", "listen_to_referee_button", "color_button", "side_button"];
    }
}

export default KeyControlsBottomField;