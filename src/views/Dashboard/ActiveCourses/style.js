import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    activeCourseCnt: {
      height: "100%",
      padding: "80px 10px 20px 10px",
      // padding: theme.spacing(10, 1),
      // [theme.breakpoints.down("sm")]: {
      //   padding: theme.spacing(8, 0),
      // },
      // [theme.breakpoints.only("md")]: {
      //   padding: theme.spacing(10, 1),
      // },
    },
    activeAdminCourseCnt: {
      height: "100%",
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
      color: "#343A40",
    },

    submitBtn: {
      position: "absolute",
      right: 8,
      bottom: 5,
      fontSize: 20,
      fontWeight: 700,
      color: "#00a2e8",
    },
    cardContent: {
      position: "relative",
    },
    cardsCnt: {
      // [theme.breakpoints.down("sm")]: {
      //   justifyContent: "center",
      // },
    },
    cardData: {
      color: "#0565d8",
    },
    cardTitle: {
      color: "#343A40",
    },
    recentCoursesCard: {
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      background: "#e6e6e6",
      margin: "0px 0px 50px 0px",
    },

    timeline: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      // [theme.breakpoints.only("md")]: {
      //   flexDirection: "unset",
      //   flexWrap: "wrap",
      // },
      // [theme.breakpoints.down("sm")]: {
      //   margin: "10px 10px",
      // },
    },
    title: {
      color: "#FF6600",
      background: "#faebd7",
      padding: 10,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      // [theme.breakpoints.down("sm")]: {
      //   flexDirection: "column",
      // },
    },
    noListingFound: {
      height: 450,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    select: {
      width: 280,
      // [theme.breakpoints.down("sm")]: {
      //   margin: "20px 0px",
      //   width: 230,
      // },
    },

    filters: {
      background: "#1fbdef",
      padding: "20px 20px",
      marginBottom: 20,
    },
  };
});
export default useStyles;
