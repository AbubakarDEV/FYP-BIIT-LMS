// import React from "react";
import Head from "next/head";
import React from "react";
import WeekView from "../../../../src/views/weeks/week.view";
import SideDrawer from "../../../../src/common/components/sidebarDrawer/drawer.cmt";
import { Axios } from "../../../../src/common/request";
import { COURSECONTENT } from "../../../../src/common/constants";

export default function Weeks(props) {
  const { courseContent, coursetitle } = props;

  return (
    <>
      <Head>
        <title>BIIT LMS</title>
      </Head>
      <SideDrawer />
      <WeekView courseContent={courseContent} courseName={coursetitle} />
    </>
  );
}

// Fetching data on SSR
export async function getServerSideProps(props) {
  const { weeks, course } = props.query;

  const cookieObj = props.req.headers.cookie
    ?.split(";")
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});

  const requestSolocalUnit = Axios.get(
    `/webservice/rest/server.php?wstoken=${cookieObj.access_token}&wsfunction=${COURSECONTENT}&courseid=${weeks}&moodlewsrestformat=json`
  );

  // responses object contains all responses of the end points
  const responses = await Promise.all([requestSolocalUnit]);

  return {
    props: {
      // Response data as a props for top level component
      courseContent: responses?.[0].data || [],
      coursetitle: course,
    },
  };
}
