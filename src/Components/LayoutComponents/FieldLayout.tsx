import * as React from "react";
//import "../src/Styles/main.css";
import Field from "../Field/Field";
import {Grid, Paper} from "@material-ui/core";
import {ModuleState} from "../../Networking/proto_build/State";
import {getPhantomModuleState} from "../PhantomData/State";
import {RemoteUIProps} from "../BasicComponents/RemoteUIReactComponent";
import KeyControlsBottomField from "./KeyControlsBottomField";

class FieldLayout extends React.Component<RemoteUIProps, any> {
  render() {
    return (
        <Grid container xs={7} style={{height: "100vh"}}>
            <Grid container xs={12} style={{height: "85vh"}} justify={"center"} alignItems={"flex-end"}> {/*My attempt at centering this*/}
                <Field transformation={0} field={this.props.state?.systemState?.state ?? (getPhantomModuleState()?.systemState?.state ?? null)}/>
            </Grid>
            <Grid item xs={6} style={{textAlign: "center"}}>
                <p className="grey">Robots on our field: 8</p>
            </Grid>
            <Grid item xs={6} style={{textAlign: "center"}}>
                <p className="grey">Playing as: yellow</p>
            </Grid>
            <KeyControlsBottomField state={this.props.state} onChange={this.props.onChange} name={""}/>
        </Grid>
    );
  }
}

export default FieldLayout;
