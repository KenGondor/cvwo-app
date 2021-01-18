import { createMuiTheme } from "@material-ui/core/";

// https://github.com/mui-org/material-ui/issues/20288
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#cc3f29",
    },
    secondary: {
      main: "#f7efeb",
    },
    success: {
      main: "#B4F8C8", // Mint
    },
  },
});

export default theme;
