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
      alignItems: "center",
      justifyContent: "space-between",
      // [theme.breakpoints.down("sm")]: {
      //   padding: "5px 10px",
      //   margin: 0,
      //   // marginBottom: 10,
      // },
    },
    teacherName: {
      textTransform: "uppercase",
      margin: 0,
      // [theme.breakpoints.down("sm")]: {
      //   fontSize: 20,
      //   // marginBottom: 10,
      // },
    },
    courseName: {
      opacity: 0.6,
      fontSize: 18,
    },
    chip: {
      wordSpacing: 2,
      // [theme.breakpoints.down("sm")]: {
      //   fontSize: 8,
      //   marginBottom: 10,
      // },
    },
    heading: {
      // [theme.breakpoints.down("sm")]: {
      //   fontSize: 14,
      // },
    },
    season: {
      // [theme.breakpoints.down("sm")]: {
      //   fontSize: 14,
      // },
    },
    totalLength: {
      // [theme.breakpoints.down("sm")]: {
      //   fontSize: 14,
      // },
    },
    noListingFound: {
      height: 450,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    img: {
      width: 40,
      // [theme.breakpoints.down("sm")]: {
      //   width: 30,
      // },
    },
  };
});
export default useStyles;
