// import React from "react";
import Head from "next/head";
import React from "react";
import WeekView from "../../../../src/views/weeks/week.view";
import SideDrawer from "../../../../src/common/components/sidebarDrawer/drawer.cmt";

export default function Weeks() {
  return (
    <>
      <Head>
        <title>BIIT LMS</title>
      </Head>
      <SideDrawer />
      <WeekView />
    </>
  );
}
