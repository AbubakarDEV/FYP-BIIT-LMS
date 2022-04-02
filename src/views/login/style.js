import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  loginWrapper: {
    background: "#d6d6d",
    height: "100vh",
  },
  leftGridImg: {
    width: "440px",
    borderRadius: 20,
  },

  leftGrid: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    borderRadius: 20,
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
    background: "#0565d8",
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
  },
  password: {
    width: 350,
    marginBottom: 20,
  },
  loginBtn: {
    width: 350,
    "& a": {
      color: "white",
    },
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
  },
}));
export default useStyles;
