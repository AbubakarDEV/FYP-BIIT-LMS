import React, { useContext } from "react";
import useStyles from "./style";
import Typography from "@mui/material/Typography";
import Context from "../../context/context";

export default function Footer() {
  const classes = useStyles();
  const ContextConsumer = useContext(Context);
  const { profile } = ContextConsumer;

  return (
    <div className={classes.footerCnt}>
      <Typography variant="body1" className={classes.heading}>
        You are logged in as {profile?.fullname}
      </Typography>
      <Typography variant="body1" className={classes.heading}>
        Copyright @ BIIT
      </Typography>
      {/* <Typography className={classes.heading}>Dashboard</Typography>
      <Typography className={classes.heading}>Courses</Typography>
      <Typography className={classes.heading}>Profile</Typography>
      <Typography className={classes.heading}>Get the mobile app</Typography> */}
    </div>
  );
}
