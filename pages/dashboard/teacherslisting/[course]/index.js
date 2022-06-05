// import React from "react";
import Head from "next/head";
import React from "react";
import SideDrawer from "../../../../src/common/components/sidebarDrawer/drawer.cmt";
import { GETALLENROLLEDUSER } from "../../../../src/common/constants";
import { Axios } from "../../../../src/common/request";
import TeacherlistingView from "../../../../src/views/ListingTeaccher/teacherlisting.view";

export default function TeacherListing(props) {
  const { teacherListing } = props;

  return (
    <>
      <Head>
        <title>BIIT LMS</title>
      </Head>
      <SideDrawer />
      <TeacherlistingView teacherListing={teacherListing} />
    </>
  );
}

// Fetching data on SSR
export async function getServerSideProps(props) {
  const { course } = props.query;

  const cookieObj = props.req.headers.cookie
    ?.split(";")
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});

  const requestSolocalUnit = Axios.get(
    `/webservice/rest/server.php?wstoken=${cookieObj.access_token}&wsfunction=${GETALLENROLLEDUSER}&courseid=${course}&moodlewsrestformat=json`
  );

  // responses object contains all responses of the end points
  const responses = await Promise.all([requestSolocalUnit]);

  return {
    props: {
      // Response data as a props for top level component
      teacherListing: responses?.[0].data || [],
    },
  };
}
