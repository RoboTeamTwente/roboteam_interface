import * as React from "react";
//import "../src/Styles/main.css";
import Field from "../Field/Field";
import {Grid, Paper} from "@material-ui/core";
import {RemoteUIProps} from "../BasicComponents/RemoteUIReactComponent";
import RemoteCheckboxField from "../BasicComponents/RemoteCheckboxField";

class ReplayControl extends React.Component<RemoteUIProps, any> {
    render() {
        return (
            <Grid item>
                <RemoteCheckboxField ui={this.props}/>
            </Grid>
        )
    }
}