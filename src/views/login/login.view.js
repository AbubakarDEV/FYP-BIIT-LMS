import React from "react";
import useStyles from "./style";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Checkbox, Paper } from "@mui/material";
export default function LoginView() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleRemberUsername = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className={classes.loginWrapper}>
      <Grid container>
        <Grid item className={classes.gridCntLeft} xs={6}>
          <Paper className={classes.leftGrid}>
            <img
              alt="logo"
              className={classes.leftGridImg}
              src="./images/logoimg.jpg"
            />
            <Typography variant="h3" className={classes.title} align="center">
              Baranin Institue of information and Technology
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} className={classes.gridCntRight}>
          <div className={classes.rightGrid}>
            <img
              alt="logo"
              className={classes.logoImg}
              src="./images/biitlogo.png"
            />
            <Typography variant="h3" align="center">
              Hello Again!
            </Typography>
            <Typography
              variant="h6"
              align="center"
              className={classes.welcomeBack}
            >
              Welcome Back! You have been Missed
            </Typography>
            <div className={classes.inputCnt}>
              <TextField
                id="outlined-required"
                className={classes.username}
                label="Enter Username"
              />
              <TextField
                id="outlined-required"
                className={classes.password}
                label="Enter Password"
              />
              <div className={classes.rememberUsername}>
                <Checkbox
                  checked={checked}
                  onChange={handleRemberUsername}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <Typography variant="body1">Remember Username</Typography>
              </div>
              <Button variant="contained" className={classes.loginBtn}>
                <Link href={"./dashboard"}>Log in</Link>
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
