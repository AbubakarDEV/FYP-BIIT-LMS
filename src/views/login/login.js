import React, { useState, useContext } from "react";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Hidden, Paper } from "@mui/material";
import { userLogin } from "../../common/actions/auth";
import {
  DIRECTORTOKEN,
  GETALLENROLLEDUSER,
  getErrors,
  GETPROFILE,
  MOODLEFORMAT,
  SERVICE_NAME,
} from "../../common/constants";
import schema from "./loginValidation";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Alert from "@mui/material/Alert";
import { getAllUserListings, getProfile } from "../../common/actions/dashboard";
import Context from "../../common/context/context";
import styles from "./login.module.css";

function LoginView() {
  const [formData, setData] = useState({
    username: "",
    password: "",
  });
  const [loading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [responseError, setResponseErrors] = useState("");
  const [showPassword, setShowPassword] = useState({
    password: false,
  });
  const ContextConsumer = useContext(Context);
  const { dispatch } = ContextConsumer;

  const router = useRouter();

  const getAlluser = (token) => {
    const request = {
      wsfunction: GETALLENROLLEDUSER,
      wstoken: token,
    };

    getAllUserListings(
      request,
      (res) => {
        localStorage.setItem("allUsers", JSON.stringify(res.data));
      },
      (err) => {}
    );
  };

  // const getProfiledata = (token) => {
  //   if (formData.username) {
  //     const request = {
  //       username: formData.username,
  //       wsfunction: GETPROFILE,
  //       wstoken:
  //         localStorage.getItem("access_token") ||
  //         Cookies.get("access_token") ||
  //         token,
  //     };
  //     getProfile(
  //       request,
  //       (res) => {
  //         localStorage.setItem("prfileID", res?.data[0]?.id);
  //         dispatch({ type: "UPDATE_PROFILE", value: res?.data[0] });
  //         router.push("/dashboard");
  //         // getAlluser(token);
  //       },
  //       (err) => {}
  //     );
  //   }
  // };

  const handleSubmit = async (data) => {
    setResponseErrors("");
    const request = {
      ...formData,
      service: SERVICE_NAME,
      moodlewsrestformat: MOODLEFORMAT,
    };
    setIsLoading(true);
    schema
      .validate(formData, { abortEarly: false })
      .then(async (valid) => {
        userLogin(
          request,
          (res) => {
            if (res?.data?.token) {
              getAlluser(res.data.token);

              localStorage.setItem("access_token", res?.data?.token);
              document.cookie = `access_token=${res?.data?.token}; path=/`;
              const request = {
                username: formData.username,
                wsfunction: GETPROFILE,
                wstoken:
                  res?.data?.token || localStorage.getItem("access_token"),
              };
              getProfile(
                request,
                (res) => {
                  localStorage.setItem("prfileID", res?.data[0]?.id);
                  localStorage.setItem(
                    "profileData",
                    JSON.stringify(res?.data[0])
                  );

                  dispatch({ type: "UPDATE_PROFILE", value: res?.data[0] });
                  router.push("/dashboard");
                },
                (err) => {}
              );
            }
            if (res?.data?.error) {
              setResponseErrors(res?.data?.error);
            }
          },
          (err) => {
            setResponseErrors(err.error);
          }
        );
      })
      .catch((err) => {
        setIsLoading(false);
        setErrors(getErrors(err));
      });
  };

  const handleClickShowPassword = () => {
    setShowPassword({
      ...showPassword,
      password: !showPassword.password,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    errors[e.target.name] = "";
    setResponseErrors("");
    setData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Grid container className={styles.loginWrapper}>
        <Hidden only={["sm", "xs"]}>
          <Grid item className={styles.gridCntLeft} xs={12} lg={6} md={6}>
            <Paper className={styles.leftGrid}>
              <img
                alt="logo"
                className={styles.leftGridImg}
                src="./images/logoimg.jpg"
              />
            </Paper>
          </Grid>
        </Hidden>
        <Grid item xs={12} lg={6} md={6} className={styles.gridCntRight}>
          <div className={styles.rightGrid}>
            <img
              alt="logo"
              className={styles.logoImg}
              src="./images/biitlogo.png"
            />
            <Typography variant="h3" align="center">
              Hello Again!
            </Typography>
            <Typography
              variant="h6"
              align="center"
              className={styles.welcomeBack}
            >
              Welcome Back! You have been Missed
            </Typography>
            <div className={styles.inputCnt}>
              <TextField
                id="outlined-required"
                className={styles.username}
                label="Enter Username"
                name="username"
                value={formData.username}
                error={errors?.username ? true : false}
                helperText={errors?.username?.[0]?.message}
                onChange={handleChange}
              />
              <TextField
                id="outlined-required"
                className={styles.password}
                label="Enter Password"
                name="password"
                value={formData.password}
                error={errors?.password ? true : false}
                helperText={errors?.password?.[0]?.message}
                type={showPassword.password ? "text" : "password"}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword.password ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {responseError && (
                <Alert severity="error" style={{ mariginBottom: 20 }}>
                  {responseError}
                </Alert>
              )}

              <Button
                variant="contained"
                onClick={handleSubmit}
                className={styles.loginBtn}
              >
                Log in
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default LoginView;
