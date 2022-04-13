import React from "react";
import { Hidden, ThemeProvider, Typography } from "@mui/material";
import theme from "../src/common/theme/theme";
import "./app.css";
import {
  userInfoState,
  initialState,
} from "../src/common/context/initialState";
import { userInfoReducer } from "../src/common/context/reducer/userInfo";
import { profileReducer } from "../src/common/context/reducer/auth";
import Context from "../src/common/context/context";
import "bootstrap/dist/css/bootstrap.css";
import Spinner from "react-bootstrap/Spinner";
import Router from "next/router";

Router.events.on("routeChangeStart", (url) => {
  document.getElementById("loader").style.display = "flex";
  document.body.style.overflow = "hidden";
});
Router.events.on("routeChangeComplete", () => {
  document.getElementById("loader").style.display = "none";
  document.body.style.overflow = "";
});
function MyApp({ Component, pageProps }) {
  const [userInfo, dispatchUserInfo] = React.useReducer(
    userInfoReducer,
    userInfoState
  );
  const [profile, dispatch] = React.useReducer(profileReducer, initialState);

  return (
    <>
      <Context.Provider
        value={{
          profile,
          dispatch,
          userInfo,
          dispatchUserInfo,
        }}
      >
        <ThemeProvider theme={theme}>
          <div id="loader" className="loader">
            <Spinner
              animation="border"
              style={{ width: 100, height: 100 }}
              variant="primary"
            />
            <Hidden only={["xs", "sm"]}>
              <Typography variant="h2" align="center">
                Loading...
              </Typography>
            </Hidden>
            <Hidden only={["md", "lg", "xl"]}>
              <Typography variant="h3" align="center">
                Loading...
              </Typography>
            </Hidden>
          </div>
          <Component {...pageProps} />
        </ThemeProvider>
      </Context.Provider>
    </>
  );
}

export default MyApp;
