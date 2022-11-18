import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

export default createTheme({
  palette: {
    primary: {
      main: purple[500]
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f"
    }
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),

    subtitle1: {
      color: purple[400]
    },
    h5: {
      color: purple[500]
    },
    h6: {
      color: purple[500]
    }
  }
});
