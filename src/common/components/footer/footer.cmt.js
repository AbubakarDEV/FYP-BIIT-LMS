import React from "react";
import useStyles from "./style";
import Typography from "@mui/material/Typography";

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footerCnt}>
      <Typography variant="body1" className={classes.heading}>
        You are logged in as ABU BAKKAR JILLANI (Log out)
      </Typography>
      <Typography className={classes.heading}>Dashboard</Typography>
      <Typography className={classes.heading}>Courses</Typography>
      <Typography className={classes.heading}>Profile</Typography>
      <Typography className={classes.heading}>Get the mobile app</Typography>
    </div>
  );
}
