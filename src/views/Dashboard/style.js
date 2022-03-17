import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  dashboardCnt: {
    // margin: "0px 100px",
    // marginTop: 20,
    marginBottom: 40,
  },
  dashboardinnerCnt: {
    display: "flex",
    justifyContent: "space-between",
  },
  heading: {
    backgroundColor: "#929eaa",
    padding: 10,
  },
  timelineCnt: {
    height: "120px",
    width: "300px",
    border: "1px solid black",
    position: "relative",
    padding: 15,
  },

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

  recentCnt: {
    marginTop: 50,
  },
  recentinnerCnt: {
    height: "180px",
    width: "320px",
    border: "1px solid black",
    position: "relative",
    // marginTop: 10,
  },
  recentImg: {
    width: "100%",
    height: "100px",
  },
  recentContentCnt: {
    padding: 12,
  },
});
export default useStyles;
