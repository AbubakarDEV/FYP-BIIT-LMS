import React, { useContext, useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Context from "../../context/context";
import styles from "./footer.module.css";

export default function Footer() {
  // const ContextConsumer = useContext(Context);
  // const { profile } = ContextConsumer;
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("profileData"));
    setResponseData(data);
  }, []);

  return (
    <div className={styles.footerCnt}>
      <Typography variant="body1" className={styles.heading}>
        You are logged in as {responseData?.fullname}
      </Typography>
      <Typography variant="body1" className={styles.heading}>
        Copyright @ BIIT
      </Typography>
      {/* <Typography className={styles.heading}>Dashboard</Typography>
      <Typography className={styles.heading}>Courses</Typography>
      <Typography className={styles.heading}>Profile</Typography>
      <Typography className={styles.heading}>Get the mobile app</Typography> */}
    </div>
  );
}
