import * as React from "react";
//import "../src/Styles/main.css";
import Field from "../Field/Field";
import {Grid, Paper} from "@material-ui/core";
import {ModuleState, State} from "../../Networking/proto_build/State";
import {RemoteUIProps} from "../BasicComponents/RemoteUIReactComponent";
import KeyControlsBottomField from "./KeyControlsBottomField";

type CombinedUiFieldProps = {
    ui: RemoteUIProps;
    field: State | undefined;
};

class FieldLayout extends React.Component<CombinedUiFieldProps, any> {
  render() {
    return null; //(
        // <Grid container xs={7} style={{height: "100vh"}}>
        //     <Grid item xs={12} style={{minHeight: "80vh"}}>
        //             <Field transformation={0} field={this.props.field ?? null}/>
        //     </Grid>
        //             <Grid item xs={12}>
        //                 <KeyControlsBottomField ui={this.props.ui}/>
        //             </Grid>
        // </Grid>
    // );
  }
}

export default FieldLayout;
