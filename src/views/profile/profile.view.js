import React, { useState } from "react";
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

export default function ProfileView() {
  const classes = useStyles();
  const [image, setImage] = useState("/images/book.png");
  const [isImgLoading, setIsImgLoading] = useState(false);
  const [isLoadingg, setIsLoading] = useState(false);

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
    <div className={classes.profileCnt}>
      <div style={{ paddingBottom: 10 }}>
        <Typography variant="h3">General Profile Setting</Typography>
        <Typography variant="body1" className={classes.caption}>
          General Profile allows to you to change your profile picture and
          adjust your account and password information
        </Typography>
      </div>
      <Divider />

      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} lg={3} className={classes.profileimgGrid}>
          <div className={classes.imageInnerCnt}>
            {image ? (
              <>
                {!isImgLoading ? (
                  <div className={classes.galleryImgCnt}>
                    <img
                      src={"/images/logoimg.jpg"}
                      alt="galleryImg"
                      className={classes.galleryImg}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = image;
                      }}
                    />
                    <div {...getRootProps({ className: "dropzone" })}>
                      <input {...getInputProps()} />
                      <Typography variant="body1" className={classes.editIcon}>
                        Update
                      </Typography>
                      {/* <EditIcon className={classes.editIcon} /> */}
                    </div>
                  </div>
                ) : (
                  <div className={classes.uploadImageContainer}>
                    <LinearProgress
                      width="100px"
                      className={classes.uploadProgress}
                    />
                    <Typography variant="body2">Uploading...</Typography>
                  </div>
                )}
              </>
            ) : (
              <>
                {!isLoadingg ? (
                  <div {...getRootProps({ className: "dropzone" })}>
                    <input {...getInputProps()} />
                    <div className={classes.uploadImageGridItem}>
                      <CloudUploadIcon className={classes.uploadIcon} />
                      <Typography variant="h4">Upload Image</Typography>
                    </div>
                  </div>
                ) : (
                  <Spinner
                    animation="border"
                    style={{ width: 50, height: 50 }}
                    variant="primary"
                  />
                )}
              </>
            )}
          </div>
        </Grid>

        <Grid lg={8} item className={classes.textfieldGrid}>
          <Typography variant="h4">Update Profile</Typography>

          <TextField
            className={classes.emailTextfield}
            id="outlined-required"
            placeholder="Email"
            label="Email"
            defaultValue="2018-arid-0955"
          />
          <TextField
            className={classes.emailTextfield}
            id="outlined-required"
            label="Username"
            defaultValue="Abubakar Jilani"
          />
          <TextField
            className={classes.emailTextfield}
            label="Country"
            defaultValue="Pakistan"
          />
          <TextField
            className={classes.emailTextfield}
            label="City/Town"
            defaultValue="Rawalpindi"
          />
          <TextField
            className={classes.emailTextfield}
            label="Phone"
            defaultValue="0317 5867877"
          />
          <Button variant="contained" className={classes.profileBtn}>
            Update Profile
          </Button>
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
            <Button variant="contained" className={classes.passwordBtn}>
              Update Password
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
