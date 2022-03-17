import React from "react";
import useStyles from "./style";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
export default function ProfileView() {
  const classes = useStyles();
  return <div className={classes.loginCnt}>Profile</div>;
}
