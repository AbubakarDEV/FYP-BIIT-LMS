import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    weeksContainer: {
      margin: "80px 10px 10px 10px",
      // margin: theme.spacing(10, 1),
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
      fontSize: 30,
      marginBottom: 20,
      // [theme.breakpoints.down("sm")]: {
      //   fontSize: 20,
      // },
    },
    mid: {
      background: "#00a2e8",
      letterSpacing: 20,
      fontWeight: 800,
      margin: 0,
      padding: 10,
      color: "#343A40",
    },
  };
});
export default useStyles;
