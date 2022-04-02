import { makeStyles } from "@mui/styles";

const customButtonStyles = makeStyles((theme) => ({
  // Outlined Success button Root Styles
  transparentroot: {
    padding: 0,
  },
  successroot: {
    padding: 0,
    // background: theme.palette.background.blue,
    border: "1px solid blue",
    "&:hover": {
      // background: theme.palette.background.blue,
    },
  },
  successDisabled: {
    // background: `${theme.palette.background.lightGray} !important`,
  },
}));

export default customButtonStyles;
