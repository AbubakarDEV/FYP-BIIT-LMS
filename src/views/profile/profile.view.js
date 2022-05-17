import React, { useState, useContext } from "react";
import useStyles from "./style";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid, Paper } from "@mui/material";
import { useDropzone } from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Divider from "@mui/material/Divider";
import Spinner from "react-bootstrap/Spinner";
import Footer from "../../common/components/footer/footer.cmt";
import Context from "../../common/context/context";

export default function ProfileView() {
  const classes = useStyles();
  const [image, setImage] = useState("/images/book.png");
  const [isImgLoading, setIsImgLoading] = useState(false);
  const [isLoadingg, setIsLoading] = useState(false);

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
      <div className={classes.profileCnt}>
        <div className={classes.captionCnt}>
          <Typography variant="h3">General Profile Setting</Typography>
          <Typography variant="body1" className={classes.caption}>
            General Profile allows to you to change your profile picture and
            adjust your account and password information
          </Typography>
        </div>
        <Divider />

        <Grid container className={classes.gridContainer}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            className={classes.profileimgGrid}
          >
            <img
              src={profile?.profileimageurlsmall || "/images/logoimg.jpg"}
              alt="galleryImg"
              className={classes.galleryImg}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = image;
              }}
            />
          </Grid>

          <Grid lg={7} sm={12} md={6} item className={classes.textfieldGrid}>
            <Typography variant="h4">Update Profile</Typography>

            <TextField
              className={classes.emailTextfield}
              id="outlined-required"
              placeholder="Email"
              label="Email"
              defaultValue={profile?.email}
            />
            <TextField
              className={classes.emailTextfield}
              id="outlined-required"
              label="Username"
              defaultValue={profile?.username}
            />
            <TextField
              className={classes.emailTextfield}
              label="Country"
              defaultValue="Pakistan"
            />
            {/* <TextField
              className={classes.emailTextfield}
              label="City/Town"
              defaultValue="Rawalpindi"
            />
            <TextField
              className={classes.emailTextfield}
              label="Phone"
              defaultValue="0317 5867877"
            /> */}
            {/* <Button variant="contained" className={classes.profileBtn}>
              Update Profile
            </Button> */}
            <Divider />
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h4" className={classes.changePassword}>
                Change Password
              </Typography>
              <TextField
                className={classes.emailTextfield}
                label="Current Password"
                defaultValue="********"
              />
              <TextField
                className={classes.emailTextfield}
                label="New Password"
                defaultValue=""
              />
              {/* <Button variant="contained" className={classes.passwordBtn}>
                Update Password
              </Button> */}
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
}
