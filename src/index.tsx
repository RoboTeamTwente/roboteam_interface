import App from "./Components/App";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import { createMuiTheme } from "@material-ui/core/styles";
import protobuf from "protobufjs";
import Long from "long";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});
protobuf.util.Long = Long;
protobuf.configure();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root") as HTMLElement
);
// TODO: Add service worker(s)?
