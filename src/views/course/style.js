import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    gridContainer: {
      padding: theme.spacing(10, 5),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(8, 0),
      },
      [theme.breakpoints.only("md")]: {
        padding: theme.spacing(10, 1),
      },
      [theme.breakpoints.only("lg")]: {
        padding: theme.spacing(10, 5),
      },
    },
    courseCnt: {
      [theme.breakpoints.only("xl")]: {
        height: "100vh",
      },
      [theme.breakpoints.only("lg")]: {
        height: "100vh",
      },
      [theme.breakpoints.only("md")]: {
        height: "100vh",
      },
    },

    cardContent: {
      position: "relative",
    },
    cardsCnt: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
      },
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
