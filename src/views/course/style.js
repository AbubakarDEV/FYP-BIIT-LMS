import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    gridContainer: {
      padding: theme.spacing(10, 10),
    },
    courseCnt: {
      height: "100vh",
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

    title: {
      color: theme.palette.typography.darkOrange,
      background: theme.palette.background.antiwhite,
      padding: 10,
    },
  };
});
export default useStyles;
