import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    listingContainer: {
      // margin: theme.spacing(10, 2),
      margin: "80px 10px 0px 10px",
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
    teacherName: {
      textTransform: "uppercase",
      margin: 0,
      // [theme.breakpoints.down("sm")]: {
      //   fontSize: 20,
      // },
    },
    noListingFound: {
      height: 450,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    courseName: {
      opacity: 0.6,
      fontSize: 18,
    },
    chip: {
      wordSpacing: 2,
      // [theme.breakpoints.down("sm")]: {
      //   fontSize: 10,
      //   marginBottom: 10,
      // },
    },
    select: {
      width: 280,
      // [theme.breakpoints.down("sm")]: {
      //   margin: "20px 0px",
      //   width: 230,
      // },
    },
  };
});
export default useStyles;
