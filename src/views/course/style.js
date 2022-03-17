import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  dueDateCnt: {
    display: "flex",
    alignItems: "center",
  },
  submissionBtn: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  assignmnetLogo: {
    width: "50px",
  },
  assignmnetCnt: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  heading: {
    backgroundColor: "#929eaa",
    padding: 10,
  },

  recentinnerCnt: {
    height: "180px",
    width: "320px",
    border: "1px solid black",
    position: "relative",
  },
  recentImg: {
    width: "100%",
    height: "100px",
  },
  recentContentCnt: {
    padding: 12,
  },

  dashboardinnerCnt: {
    display: "flex",
    justifyContent: "space-between",
  },
});
export default useStyles;
