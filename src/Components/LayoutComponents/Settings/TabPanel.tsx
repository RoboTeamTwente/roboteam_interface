import { Box, Typography } from "@material-ui/core";
import React from "react";

export default class TabPanel extends React.PureComponent<any> {
    render() {
        const { children, value, index, ...other } = this.props;
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`scrollable-auto-tabpanel-${index}`}
                aria-labelledby={`scrollable-auto-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box p={3}>
                       {children}
                    </Box>
                )}
            </div>
        );
    }
}
