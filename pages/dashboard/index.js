import React, { useContext } from "react";
import Head from "next/head";
import SideDrawer from "../../src/common/components/sidebarDrawer/drawer.cmt";
import Context from "../../src/common/context/context";
import DashbaordIndex from "../../src/views/Dashboard";

export default function Dashboard() {
  const ContextConsumer = useContext(Context);
  const { profile } = ContextConsumer;

  return (
    <>
      <Head>
        <title>BIIT LMS</title>
      </Head>
      <SideDrawer />
      <DashbaordIndex profileID={profile?.id} />
    </>
  );
}
