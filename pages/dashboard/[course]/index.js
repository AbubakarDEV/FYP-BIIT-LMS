// import React from "react";
import Head from "next/head";
import CourseView from "../../../src/views/course/course.view";
import React from "react";
import SideDrawer from "../../../src/common/components/sidebarDrawer/drawer.cmt";

export default function Course() {
  return (
    <>
      <Head>
        <title>BIIT LMS</title>
      </Head>
      <SideDrawer />
      <CourseView />
    </>
  );
}
