import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    listingContainer: {
      height: "100vh",
    },
    title: {
      color: theme.palette.typography.darkOrange,
      background: theme.palette.background.antiwhite,
      padding: 10,
      marginTop: 10,
    },
    imgIcon: {
      width: 40,
      [theme.breakpoints.down("sm")]: {
        width: 25,
      },
    },
    teacherName: {
      textTransform: "uppercase",
      margin: 0,
      [theme.breakpoints.down("sm")]: {
        fontSize: 20,
      },
    },
    courseName: {
      opacity: 0.6,
      fontSize: 18,
    },
    chip: {
      wordSpacing: 2,
      [theme.breakpoints.down("sm")]: {
        fontSize: 10,
        marginBottom: 10,
      },
    },
  };
});
export default useStyles;
