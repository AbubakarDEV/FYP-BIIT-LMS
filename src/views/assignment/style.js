import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    assignmnetContainer: {
      height: "100%",
      padding: theme.spacing(10, 1),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(8, 0),
      },
      [theme.breakpoints.only("md")]: {
        padding: theme.spacing(10, 1),
      },
    },
    filter: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      background: "orange",
      padding: "20px 0px",
    },
    tableHeader: {
      fontWeight: 800,
      fontSize: 20,
      color: "white",
    },
    totalLength: {
      fontSize: 25,
      fontWeight: 900,
      color: "white",
    },
  };
});
export default useStyles;
