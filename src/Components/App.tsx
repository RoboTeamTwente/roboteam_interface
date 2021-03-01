import * as React from 'react';
import { getWidth } from '../Utils/Dimensions';
import Field from './Field/Field';
import SettingsWidget from './Settings/SettingsWidget';
import "../Styles/main.css"
import { createMuiTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@material-ui/core';
import logo from '../Images/roboteam_logo_trans.png';

// let theme = createMuiTheme({
//     palette: {
//         background: {
//             default: "#2c2f33"
//         },
//         primary: {
//             main: "#2c2f33",
//         },
//         secondary: {
//             main: "#f60101",
//         }
//     }
// });

// let theme = createMuiTheme({
//     palette: {
//         primary: {
//             main: purple[500],
//         },
//         secondary: {
//             main: green[500],
//         },
//     },
// });
// theme = responsiveFontSizes(theme);
class App extends React.Component {
    public render() {
        return (
            <>
                {/* <div className="roboteamLogoTopDiv">
                    <img className="roboteamLogoTop" src={logo} alt="Logo" />
                </div> */}
                <div>
                    <Field transformation={0}></Field>
                    <SettingsWidget />
                </div>
            </>
        )
    }
}

export default App;