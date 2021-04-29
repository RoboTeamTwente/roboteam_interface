import * as React from "react";
//import "../src/Styles/main.css";
import Field from "../Field/Field";
import {Box, Grid, Paper} from "@material-ui/core";
import {ModuleState} from "../../Networking/proto_build/State";
import RemoteCheckboxField from "../BasicComponents/RemoteCheckboxField";
import {RemoteUIProps} from "../BasicComponents/RemoteUIReactComponent";
import RemoteDropdownField from "../BasicComponents/RemoteDropdownField";

class KeyControlsBottomField extends React.Component<{ui: RemoteUIProps}, any> {
    render() {
        return (
            <Grid container xs={12} alignItems={"center"} justify={"center"} spacing={5}>
                <Grid item>
                    <label>Pause: </label>
                    <RemoteCheckboxField ui={{...this.props.ui, name: "stop"}}/>
                </Grid>
                <Grid item>
                    <label>Simulator: </label>
                    <RemoteDropdownField ui={{...this.props.ui, name: "simulator"}}/>
                </Grid>
                <Grid item>
                    <label>Ignore Invariants: </label>
                    <RemoteCheckboxField ui={{...this.props.ui, name: "ignoreInvariants"}}/>
                </Grid>
                <Grid item>
                    <label>Use Referee: </label>
                    <RemoteCheckboxField ui={{...this.props.ui, name: "referee"}}/>
                </Grid>
                <Grid item>
                    <label>Is Yellow: </label>
                    <RemoteCheckboxField ui={{...this.props.ui, name: "isYellow"}}/>
                </Grid>
                <Grid item>
                    <label>Play Right: </label>
                    <RemoteCheckboxField ui={{...this.props.ui, name: "isRight"}}/>
                </Grid>
            </Grid>
        );
    }
}

export default KeyControlsBottomField;