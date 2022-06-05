import React from "react";
import Footer from "../../common/components/footer/footer.cmt";
import ActiveCourses from "./ActiveCourses/activeCourses";
import DashboardView from "./dashboard.view";

export default function DashbaordIndex(props) {
  const { profileID } = props;

  return (
    <div>
      {profileID == 2 ? <DashboardView /> : <ActiveCourses applyStyle={true} />}
      <Footer />
    </div>
  );
}
