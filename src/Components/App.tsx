import * as React from "react";
import { getWidth } from "../Utils/Dimensions";
import Field from "./Field/Field";
import SettingsWidget from "./Settings/SettingsWidget";
import "../Styles/main.css";
import {
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";
import logo from "../Images/roboteam_logo_trans.png";
//materailsui imports
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  paper: { backgroundColor: "blue" },
}));

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
  readonly root = "flexGrow: 1";
  readonly paper = 'textAlign: "center"';

  public render() {
    return (
      <body>
        <div className={this.root}>
          <Grid container spacing={3}>
            <Grid item xs={7} container>
              <Grid item xs={12}>
                <Paper className={"column"}>
                  <p>field</p>
                  <p>field</p>
                  <p>field</p>
                  <p>field</p>
                  <p>field</p>
                  <p>field</p>
                  <p>field</p>
                  <p>field</p>
                  <p>field</p>
                  <p>field</p>
                  <p>field</p>
                  <p>field</p>
                  <p>field</p>
                  <p>field</p>
                  <p>field</p>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={"column"}>
                  <p>controls</p>
                  <p>controls</p>
                  <p>controls</p>
                  <p>controls</p>
                </Paper>
              </Grid>
            </Grid>
            <Grid item xs={5} container>
              <Grid item xs={12}>
                <Paper className={"column"}>
                  <p>info</p>
                  <p>info</p>
                  <p>info</p>
                  <p>info</p>
                  <p>info</p>
                  <p>info</p>
                  <p>info</p>
                  <p>info</p>
                  <p>info</p>
                  <p>info</p>
                  <p>info</p>
                  <p>info</p>
                  <p>info</p>
                  <p>info</p>
                  <p>info</p>
                  <p>info</p>
                  <p>info</p>
                  <p>info</p>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={"column"}>
                  <img className="roboteamLogo" src={logo} alt="Logo" />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </body>
      // <body>
      //   <div className="row">
      //     <div className="column field">
      //       <Field></Field>
      //       <div className="wrapperControls">
      //         <div className="row">
      //           <div className="column">
      //             <p className="grey">Robots on our Team: </p>
      //           </div>
      //           <div className="column">
      //             <p> 8 </p>
      //           </div>
      //           <div className="column">
      //             <p className="grey">Playing as:</p>
      //           </div>
      //           <div className="column">
      //             <p>yellow</p>
      //           </div>
      //           <div className="column">
      //             <button className="button">switch sides</button>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="column settings">
      //       <SettingsWidget />
      //     </div>
      //   </div>
      //   <div className="wrapperControls">
      //     <button>Replay</button>
      //   </div>
      //   <div className="roboteamLogoTopDiv">
      //     <img className="roboteamLogoTop" src={logo} alt="Logo" />
      //   </div>
      // </body>
    );
  }
}

export default App;
