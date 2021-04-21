import * as React from "react";
//import "../src/Styles/main.css";
import Field from "../Field/Field";
import {Grid, Paper} from "@material-ui/core";
import {ModuleState} from "../../Networking/proto_build/State";
import {getPhantomModuleState} from "../PhantomData/State";
import RemoteCheckboxField from "../BasicComponents/RemoteCheckboxField";
import {RemoteUIProps} from "../BasicComponents/RemoteUIReactComponent";

class KeyControlsBottomField extends React.Component<RemoteUIProps, any> {
    render() {
        return (
            <Grid item>
                <RemoteCheckboxField state={this.props.state} onChange={this.props.onChange} name={"stop"}/>
                <RemoteCheckboxField state={this.props.state} onChange={this.props.onChange} name={"grSim"}/>
                <RemoteCheckboxField state={this.props.state} onChange={this.props.onChange} name={"ignoreInvariants"}/>
                <RemoteCheckboxField state={this.props.state} onChange={this.props.onChange} name={"referee"}/>
            </Grid>
        );
    }
}

export default KeyControlsBottomField;