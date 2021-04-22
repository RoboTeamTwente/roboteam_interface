import * as React from "react";
//import "../src/Styles/main.css";
import Field from "../Field/Field";
import {Grid, Paper} from "@material-ui/core";
import {ModuleState} from "../../Networking/proto_build/State";
import {RemoteUIProps} from "../BasicComponents/RemoteUIReactComponent";
import KeyControlsBottomField from "./KeyControlsBottomField";

class FieldLayout extends React.Component<RemoteUIProps, any> {
  render() {
    return (
        <Grid container xs={7} style={{height: "100vh"}}>
            <Grid item xs={12} style={{minHeight: "80vh"}}>
                    <Field transformation={0} field={this.props.state?.systemState?.state ?? null}/>
            </Grid>
                    <Grid item xs={12}>
                        <KeyControlsBottomField state={this.props.state} onChange={this.props.onChange} name={""}/>
                    </Grid>
        </Grid>
    );
  }
}

export default FieldLayout;
