// import React from "react";
import Head from "next/head";
import React from "react";
import SideDrawer from "../../src/common/components/sidebarDrawer/drawer.cmt";
import DashboardView from "../../src/views/Dashboard/dashboard.view";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>BIIT LMS</title>
      </Head>
      <SideDrawer />
      <DashboardView />
    </>
  );
}
