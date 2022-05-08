import React from "react";
import Head from "next/head";
import LoginView from "../../src/views/login/login.view";
import { BASE_URL } from "../../src/common/constants";
import MyMapComponent from "../../src/views/map/map";
export default function Login() {
  return (
    <>
      <Head>
        <title>BIIT LMS</title>
      </Head>
      <LoginView />
    </>
  );
}
