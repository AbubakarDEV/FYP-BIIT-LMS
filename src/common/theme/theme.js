import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import colors from "../styles/colors.json";

import { createBreakpoints } from "@mui/system";

const breakpoints = createBreakpoints({});

const { gray, primary, common, red, green, yellow, orange, antiquewhite } =
  palette;

const theme = createTheme({
  typography: {
    fontFamily: "'Open Sans', 'sans-serif'",
    h1: {
      fontSize: 48,
      fontWeight: 700,
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
      marginBottom: 10,
      color: gray[600],
      fontFamily: "'Roboto', 'sans-serif'",
      [breakpoints.down("xs")]: {
        fontSize: 35,
      },
    },
    h2: {
      fontSize: 44,
      fontWeight: 700,
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
      marginBottom: 10,
      color: gray[600],
      fontFamily: "'Roboto', 'sans-serif'",
      [breakpoints.down("xs")]: {
        fontSize: 30,
      },
    },
    h3: {
      fontSize: 36,
      fontWeight: 500,
      lineHeight: 1.25,
      letterSpacing: "-0.01562em",
      marginBottom: 10,
      color: gray[800],
      fontFamily: "'Roboto', 'sans-serif'",
      [breakpoints.down("lg")]: {
        fontSize: 22,
      },
    },
    h4: {
      fontSize: 18,
      fontWeight: 500,
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
      marginBottom: 10,
      fontFamily: "'Roboto', 'sans-serif'",
      color: gray[800],
    },
    h5: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
      fontFamily: "'Roboto', 'sans-serif'",
      marginBottom: 10,
      color: gray[800],
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
      color: gray[600],
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
      color: gray[600],
    },
    body1: {
      fontWeight: 400,
      fontSize: 15,
      lineHeight: 1.5,
      color: gray[600],
    },
  },
  palette: {
    primary: {
      main: primary.dark,
    },
    background: {
      black: common.black,
      white: common.white,
      blue: primary.dark,
      blueMedium: primary.medium,
      blueMediumLight: primary.mediumLight,
      blueLight: primary.light,
      blueExtraLight: primary.extraLight,
      darkGray: gray[600],
      mediumGray: gray[300],
      lightGray1: gray[100],
      lightGray: gray[0],
      orange: orange[200],
      orangeMedium: orange[100],
      redDark: red[300],
      red: red[100],
      yellow: yellow[200],
      green: green[200],
      greenMedium: green[100],
      antiwhite: antiquewhite[100],
    },
    icon: {
      white: common.white,
      blue: primary.dark,
      blueMedium: primary.medium,
      blueLight: primary.light,
      darkGray: gray[600],
      mediumGray: gray[300],
      lightGray2: gray[200],
      lightGray1: gray[100],
      lightGray: gray[0],
      redDark: red[300],
      darkOrange: orange[200],
      green: green[200],
    },
    secondary: {
      light: primary.light,
      medium: primary.medium,
      main: colors.red,
      contrastText: colors.yellow,
      darkGray: gray[600],
      mediumGray: gray[300],
      lightGray2: gray[200],
      lightGray1: gray[100],
      lightGray: gray[0],
      darkOrange: orange[200],
    },
    formColor: {
      light: colors.lightBlue,
    },
    typography: {
      black: common.black,
      blue: primary.dark,
      blue0: primary.extraLight,
      blueMedium: primary.medium,
      white: common.white,
      darkGray: gray[600],
      mediumGray: gray[300],
      lightGray2: gray[200],
      lightGray3: gray[300],
      redMedium: red[100],
      red: red[200],
      redDark: red[300],
      mediumGreen: green[200],
      mediumYellow: yellow[200],
      darkOrange: orange[200],
      lightOrange: orange[100],
      green: green[200],
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  padding: {
    section: "0 50px",
  },
  border: {
    light: `1px solid ${gray[100]}`,
    white: `1px solid ${common.white}`,
    medium: `1px solid ${gray[200]}`,
    dark: `1px solid ${gray[300]}`,
    blue: `1px solid ${primary.dark}`,
    blueBorder: `1px solid ${primary.medium}`,
    greenBorder: `1px solid ${green[200]}`,
    orangeBorder: `1px solid ${orange[200]}`,
    darkRedBorder: `1px solid ${red[300]}`,
  },
});

export default theme;
