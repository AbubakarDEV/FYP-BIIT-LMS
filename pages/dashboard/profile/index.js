import React from "react";

import Head from "next/head";
import ProfileView from "../../../src/views/profile/profile.view";
import SideDrawer from "../../../src/common/components/sidebarDrawer/drawer.cmt";

export default function Profile() {
  return (
    <>
      <Head>
        <title>BIIT LMS</title>
      </Head>
      <SideDrawer />
      <ProfileView />
    </>
  );
}
