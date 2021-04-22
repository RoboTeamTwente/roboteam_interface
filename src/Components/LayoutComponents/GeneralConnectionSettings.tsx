import * as React from 'react';
import CentralServerConnectionSettings, {CentralServerSettingsProps} from "../CentralServerConnectionSettings";
import {RemoteUIProps} from "../BasicComponents/RemoteUIReactComponent";
import {Box, Divider, Grid, Typography} from "@material-ui/core";
import SimulatorConnectionSettings from "../SimulatorConnectionSettings";

class GeneralConnectionSettings extends React.PureComponent<{csProps: CentralServerSettingsProps, simProps: RemoteUIProps}, any> {
    render() {
        return <Grid container xs={12} >
            <Grid item xs={12}>
                <h1>Central Server Settings</h1>
                <CentralServerConnectionSettings socketSettingsDidChange={this.props.csProps.socketSettingsDidChange} wsocket={this.props.csProps.wsocket} defaultHostPortPair={this.props.csProps.defaultHostPortPair}/>
                <Box pt={4}>
                    <Divider/>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <h1>Simulation Server Settings</h1>
                <SimulatorConnectionSettings state={this.props.simProps.state} onChange={this.props.simProps.onChange} name={""}/>
            </Grid>
        </Grid>
    }
}

export default GeneralConnectionSettings;