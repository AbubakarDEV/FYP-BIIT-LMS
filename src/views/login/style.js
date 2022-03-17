import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  logoCnt: {
    display: "flex",
    justifyContent: "center",
    marginTop: 30,
  },
  logoImg: {
    width: "300px",
  },
  loginCnt: {
    display: "flex",
    justifyContent: "center",
    alignItems: "Cenetr",
    flexDirection: "column",
  },
  inputCnt: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  username: {
    width: "500px",
    marginBottom: 20,
  },
  password: {
    width: "500px",
  },
  loginBtn: {
    marginTop: 20,
    width: "200px",
    fontSize: 20,
    color: "white",
  },
});
export default useStyles;
