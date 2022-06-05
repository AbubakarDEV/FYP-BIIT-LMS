import React from "react";
import Head from "next/head";
import LoginView from "../../src/views/login/login.view";
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
