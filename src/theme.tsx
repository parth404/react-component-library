import { createTheme, responsiveFontSizes } from "@mui/material";
import { green, purple, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D0BCFF",
    },
    success: {
      main: green[500],
    },
    error: {
      main: red[500],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          borderRadius: 100,
        },
      },
      defaultProps: {
        size: "medium",
      },
    },
  },
});

export default responsiveFontSizes(theme);
