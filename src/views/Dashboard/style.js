import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
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
    },

    gridContainer: {
      padding: theme.spacing(10, 15),
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
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    cardDate: {
      color: theme.palette.typography.blue,
    },
    cardTitle: {
      color: theme.palette.typography.darkGray,
    },
    recentCoursesCard: {
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
    },
    title: {
      color: theme.palette.typography.darkOrange,
      background: theme.palette.background.antiwhite,
      padding: 10,
    },
  };
});
export default useStyles;
