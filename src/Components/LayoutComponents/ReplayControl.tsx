import * as React from "react";
//import "../src/Styles/main.css";
import Field from "../Field/Field";
import {Grid, Paper} from "@material-ui/core";
import {ModuleState} from "../../Networking/proto_build/State";
import {getPhantomModuleState} from "../PhantomData/State";
import {RemoteUIProps} from "../BasicComponents/RemoteUIReactComponent";
import RemoteCheckboxField from "../BasicComponents/RemoteCheckboxField";

class ReplayControl extends React.Component<RemoteUIProps, any> {
    render() {
        return (
            <Grid item>
                <RemoteCheckboxField state={this.props.state} onChange={this.props.onChange} name={""}/>
            </Grid>
        )
    }
}