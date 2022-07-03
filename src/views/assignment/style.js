import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    assignmnetContainer: {
      height: "100vh",
      padding: theme.spacing(7, 0),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(6, 0),
      },
      [theme.breakpoints.only("md")]: {
        padding: theme.spacing(6, 0),
      },
    },
    filter: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      background: "orange",
      padding: "20px 0px",
    },
    tableHeader: {
      fontWeight: 800,
      fontSize: 20,
      color: "white",
    },
    totalLength: {
      fontSize: 25,
      fontWeight: 900,
      color: "white",
    },
    lateSubmissionCnt: {
      background: "red",
      // height: "100vh",
    },
    noDate: {
      color: "white",
    },
    inTimeCnt: {
      background: "green",
      // height: "100vh",
      // marginTop: 60,
    },
    noDataCnt: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 650,
      flexDirection: "column",
    },
  };
});
export default useStyles;
