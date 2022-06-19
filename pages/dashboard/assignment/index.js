import React from "react";

import Head from "next/head";
import SideDrawer from "../../../src/common/components/sidebarDrawer/drawer.cmt";
import AssignmetView from "../../../src/views/assignment/assignmet.view";

export default function Profile() {
  return (
    <>
      <Head>
        <title>BIIT LMS</title>
      </Head>
      <SideDrawer />
      <AssignmetView />
    </>
  );
}
