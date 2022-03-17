import React from "react";
import useStyles from "./style";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
export default function LoginView() {
  const classes = useStyles();
  return (
    <div className={classes.loginCnt}>
      <div className={classes.logoCnt}>
        <img
          alt="logo"
          className={classes.logoImg}
          src="./images/biitlogo.png"
        />
      </div>
      <div className={classes.inputCnt}>
        <TextField
          id="outlined-required"
          className={classes.username}
          label="Username"
        />
        <TextField
          id="outlined-required"
          className={classes.password}
          label="Password"
        />
        <Button variant="contained" className={classes.loginBtn}>
          <Link href={"./dashboard"}>Login</Link>
        </Button>
      </div>
    </div>
  );
}
