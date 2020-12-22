import { createMuiTheme } from "@material-ui/core/";

// augment colors expects main, link: https://github.com/mui-org/material-ui/issues/20288
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#A0E7E5", // Tiffany
    },
    secondary: {
      main: "#FFAEBC", // Hot Pink
    },
    success: {
      main: "#B4F8C8", // Mint
    },
  },
});

export default theme;
