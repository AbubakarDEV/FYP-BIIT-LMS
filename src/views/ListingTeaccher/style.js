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
      marginTop: 10,
    },
    teacherName: {
      // textDecoration: "underline",
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
      //   fontSize: 10,
      //   marginBottom: 10,
      // },
    },
  };
});
export default useStyles;
