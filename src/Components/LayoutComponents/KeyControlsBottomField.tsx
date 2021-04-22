import * as React from "react";
//import "../src/Styles/main.css";
import Field from "../Field/Field";
import {Box, Grid, Paper} from "@material-ui/core";
import {ModuleState} from "../../Networking/proto_build/State";
import RemoteCheckboxField from "../BasicComponents/RemoteCheckboxField";
import {RemoteUIProps} from "../BasicComponents/RemoteUIReactComponent";
import RemoteDropdownField from "../BasicComponents/RemoteDropdownField";

class KeyControlsBottomField extends React.Component<RemoteUIProps, any> {
    render() {
        return (
            <Grid container xs={12} alignItems={"center"} justify={"center"} spacing={5}>
                <Grid item>
                    <label>Stop: </label>
                    <RemoteCheckboxField state={this.props.state} onChange={this.props.onChange} name={"stop"}/>
                </Grid>
                <Grid item>
                    <label>Simulator: </label>
                    <RemoteDropdownField state={this.props.state} onChange={this.props.onChange} name={"simulator"}/>
                </Grid>
                <Grid item>
                    <label>Ignore Invariants: </label>
                    <RemoteCheckboxField state={this.props.state} onChange={this.props.onChange} name={"ignoreInvariants"}/>
                </Grid>
                <Grid item>
                    <label>Referee: </label>
                    <RemoteCheckboxField state={this.props.state} onChange={this.props.onChange} name={"referee"}/>
                </Grid>
                <Grid item>
                    <label>isYellow: </label>
                    <RemoteCheckboxField state={this.props.state} onChange={this.props.onChange} name={"isYellow"}/>
                </Grid>
                <Grid item>
                    <label>isLeft: </label>
                    <RemoteCheckboxField state={this.props.state} onChange={this.props.onChange} name={"isLeft"}/>
                </Grid>
            </Grid>
        );
    }
}

export default KeyControlsBottomField;