import { makeStyles, Tab, Tabs } from '@material-ui/core'
import { Component } from 'react'
import StpStateWidget from './StpStateWidget';
import TabPanel from './TabPanel';

interface SettingsWidgetProps {}
interface SettingsWidgetState {
    tab: number;
}

// const useStyles = makeStyles(theme => ({
//     root: {},
//     title: {
//         color: theme.palette.primary.main
//     }
// }));

export class SettingsWidget extends Component<SettingsWidgetProps, SettingsWidgetState> {
    constructor(props: SettingsWidgetProps) {
        super(props)
        this.state = {
            tab: 0,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(_: object, value: any) {
        this.setState({ tab: value });
    }

    render() {
        return (
            <div className="settingsDiv">
                <Tabs
                    value={this.state.tab}
                    variant="scrollable"
                    color="secondary"
                    textColor="secondary"
                    indicatorColor="secondary"
                    onChange={this.handleChange}
                >
                    <Tab label="STP States"></Tab>
                    <Tab label="Keeper" />
                    <Tab label="Plays" />
                    <Tab label="Charts" />
                    <Tab label="Robots" />
                    <Tab label="GameStateManager" />
                </Tabs>
                <TabPanel value={this.state.tab} index={0}>
                    <StpStateWidget></StpStateWidget>
                </TabPanel>
                <TabPanel value={this.state.tab} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={this.state.tab} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={this.state.tab} index={3}>
                    Item Four
                </TabPanel>
                <TabPanel value={this.state.tab} index={4}>
                    Item Five
                </TabPanel>
                <TabPanel value={this.state.tab} index={5}>
                    Item Six
                </TabPanel>
                <TabPanel value={this.state.tab} index={6}>
                    Item Seven
                </TabPanel>
            </div>
        )
    }
}

export default SettingsWidget
