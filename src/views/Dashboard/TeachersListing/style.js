import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    listingContainer: {
      margin: theme.spacing(10, 2),
    },
    title: {
      color: theme.palette.typography.darkOrange,
      background: theme.palette.background.antiwhite,
      padding: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      [theme.breakpoints.down("sm")]: {
        padding: "5px 10px",
        margin: 0,
      },
    },
    teacherName: {
      textTransform: "uppercase",
      margin: 0,
      [theme.breakpoints.down("sm")]: {
        fontSize: 20,
        // marginBottom: 10,
      },
    },
    courseName: {
      opacity: 0.6,
      fontSize: 18,
    },
    chip: {
      wordSpacing: 2,
      [theme.breakpoints.down("sm")]: {
        fontSize: 8,
        marginBottom: 10,
      },
    },
    heading: {
      [theme.breakpoints.down("sm")]: {
        fontSize: 14,
      },
    },
    season: {
      [theme.breakpoints.down("sm")]: {
        fontSize: 16,
      },
    },
    totalLength: {
      [theme.breakpoints.down("sm")]: {
        fontSize: 16,
      },
    },
    img: {
      width: 40,
    },
  };
});
export default useStyles;
