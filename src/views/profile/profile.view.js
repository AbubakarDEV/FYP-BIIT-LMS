import React, { useState, useContext } from "react";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Grid, Paper } from "@mui/material";
import { useDropzone } from "react-dropzone";
import Divider from "@mui/material/Divider";
import Footer from "../../common/components/footer/footer.cmt";
import Context from "../../common/context/context";
import styles from "./profile.module.css";

export default function ProfileView() {
  const [image, setImage] = useState("/images/book.png");
  const [isImgLoading, setIsImgLoading] = useState(false);

  const ContextConsumer = useContext(Context);
  const { profile } = ContextConsumer;

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png",
    onDrop: (files) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setIsImgLoading(true);
        const dataURL = e.target.result;

        let formData = new FormData();
        formData.append("logo_file_name", files[0]);
      };
      files.forEach((file) => {
        const temp = reader.readAsDataURL(file);
        return temp;
      });
    },
  });
  return (
    <>
      <div className={styles.profileCnt}>
        <div className={styles.captionCnt}>
          <Typography variant="h3">General Profile Setting</Typography>
          <Typography variant="body1" className={styles.caption}>
            General Profile allows to you to change your profile picture and
            adjust your account and password information
          </Typography>
        </div>
        <Divider />

        <Grid container className={styles.gridContainer}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            className={styles.profileimgGrid}
          >
            <img
              src={profile?.profileimageurlsmall || "/images/logoimg.jpg"}
              alt="galleryImg"
              className={styles.galleryImg}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = image;
              }}
            />
          </Grid>

          <Grid lg={7} sm={12} md={6} item className={styles.textfieldGrid}>
            <Typography variant="h4">Update Profile</Typography>

            <TextField
              className={styles.emailTextfield}
              id="outlined-required"
              placeholder="Email"
              label="Email"
              defaultValue={profile?.email}
            />
            <TextField
              className={styles.emailTextfield}
              id="outlined-required"
              label="Username"
              defaultValue={profile?.username}
            />
            <TextField
              className={styles.emailTextfield}
              label="Country"
              defaultValue="Pakistan"
            />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
}
