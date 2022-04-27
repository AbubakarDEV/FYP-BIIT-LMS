import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    weeksContainer: {
      margin: theme.spacing(10, 1),
    },
    weekCnt: {
      padding: 20,
      display: "flex",
      alignItems: "center",
    },
    folderImg: {
      width: 40,
      marginRight: 20,
    },
    heading: {
      margin: 0,
      [theme.breakpoints.down("sm")]: {
        fontSize: 20,
      },
    },
    mid: {
      background: theme.palette.background.blueMedium,
      letterSpacing: 20,
      fontWeight: 800,
      margin: 0,
      padding: 10,
      color: theme.palette.typography.darkGray,
    },
  };
});
export default useStyles;
