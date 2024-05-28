import { createTheme, responsiveFontSizes } from "@mui/material";
import { green, purple, red } from "@mui/material/colors";
import colorConfigs from "./configs/colorConfigs";

const theme = createTheme({
  palette: {
    primary: {
      main: colorConfigs.button.main,
      dark: colorConfigs.button.dark,
      contrastText: colorConfigs.button.color,
    },
    success: {
      main: green[500],
    },
    error: {
      main: red[500],
    },
    action: {
      disabledBackground: "",
      disabled: "",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 100,
          textTransform: "none",
          fontFamily: "Roboto",
          lineHeight: "normal",
          color: colorConfigs.button.color,
          ":hover": {
            backgroundColor: colorConfigs.button.hoverBg,
          },
          "&.Mui-disabled": {
            opacity: 0.48,
            color: "#381E72",
            backgroundColor: "#F7F2FA",
            border: "0px",
          },
        },
        outlined: {
          border: "1px solid",
          borderColor: colorConfigs.button.main,
          color: colorConfigs.button.color,
          ":hover": {
            backgroundColor: colorConfigs.button.bg,
          },
          "&.Mui-disabled": {
            opacity: 0.48,
            color: colorConfigs.button.color,
            border: "0px",
          },
        },
        text: {
          ":hover": {
            backgroundColor: colorConfigs.button.bg,
          },
        },
        contained: {
          color: colorConfigs.button.color,
          backgroundColor: colorConfigs.button.main,
          ":hover": {
            backgroundColor: colorConfigs.button.hoverBgMain,
          },
        },
      },
      defaultProps: {
        size: "medium",
      },
    },
  },
});

export default responsiveFontSizes(theme);
