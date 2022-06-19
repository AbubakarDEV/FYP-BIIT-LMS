import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    dashboardCnt: {
      height: "100%",
      padding: theme.spacing(10, 1),

      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(8, 0),
      },
      [theme.breakpoints.only("md")]: {
        padding: theme.spacing(10, 1),
      },
    },
    leftGrid: {
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
    },
    recentCourses: {
      height: 150,
      width: 300,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    recentCoursesCard: {
      display: "flex",
      flexDirection: "row",
      // padding: 100,
    },
    cardDate: {
      fontSize: 16,
      color: theme.palette.typography.darkGray,
      // color: "red !important",
    },
    gridContainer: {
      // padding: theme.spacing(10, 1),
      // [theme.breakpoints.down("sm")]: {
      //   padding: theme.spacing(8, 0),
      // },
      // [theme.breakpoints.only("md")]: {
      //   padding: theme.spacing(10, 1),
      // },
    },
    submitBtn: {
      position: "absolute",
      right: 8,
      bottom: 5,
      fontSize: 20,
      fontWeight: 700,
      color: theme.palette.typography.blueMedium,
    },
    cardContent: {
      position: "relative",
    },
    cardsCnt: {
      // display: "flex",
      // justifyContent: "space-between",
      // flexWrap: "wrap",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
      },
    },
    cardData: {
      color: theme.palette.typography.blue,
    },
    cardTitle: {
      color: theme.palette.typography.darkGray,
    },
    recentCoursesCard: {
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      background: theme.palette.background.lightGray1,
      margin: "0px 0px 50px 0px",
    },

    timeline: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      [theme.breakpoints.only("md")]: {
        flexDirection: "unset",
        flexWrap: "wrap",
      },
      [theme.breakpoints.down("sm")]: {
        margin: "10px 10px",
      },
    },
    title: {
      color: theme.palette.typography.darkOrange,
      background: theme.palette.background.antiwhite,
      padding: 10,
    },
  };
});
export default useStyles;
