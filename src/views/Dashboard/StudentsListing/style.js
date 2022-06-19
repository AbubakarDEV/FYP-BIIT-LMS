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
      justifyContent: "space-between",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
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
    select: {
      width: 280,
      [theme.breakpoints.down("sm")]: {
        margin: "20px 0px",
        width: 230,
      },
    },
  };
});
export default useStyles;
