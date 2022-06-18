import { makeStyles } from "@mui/styles";

const stylesObj = makeStyles((theme) => {
  return {
    loginWrapper: {
      height: "100vh",
    },
    leftGridImg: {
      width: "550px",
      height: "100%",
    },

    title: {
      margin: "auto",
    },
    logoImg: {
      width: "200px",
    },

    gridCntRight: {
      padding: 20,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "white",
    },
    gridCntLeft: {
      padding: 20,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#00a2e8",
      // background: "#00a2e8",
    },
    inputCnt: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    username: {
      width: 350,
      marginBottom: 20,
      // [theme.breakpoints.down("sm")]: {
      //   width: 260,
      // },
    },
    password: {
      width: 350,
      marginBottom: 20,
      // [theme.breakpoints.down("sm")]: {
      //   width: 260,
      // },
    },
    loginBtn: {
      width: 350,
      "& a": {
        color: "white",
      },
      marginTop: 20,
      background: "#00a2e8",
      // [theme.breakpoints.down("sm")]: {
      //   width: 260,
      // },
    },
    rememberUsername: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },
    welcomeBack: {
      color: "gray",
      marginBottom: 20,
    },
    rightGrid: {
      background: "white",
      padding: 40,
      borderRadius: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      boxShadow: "1px 1px 1px 3px rgba(0,0,0,0.1)",
      // [theme.breakpoints.down("sm")]: {
      //   padding: 15,
      // },
    },
  };
});
export default stylesObj;
