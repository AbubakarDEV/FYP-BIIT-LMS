import React from "react";
import Footer from "../../common/components/footer/footer.cmt";
import DashboardView from "./dashboard.view";

export default function DashbaordIndex(props) {
  const { profileID } = props;

  return (
    <div>
      <DashboardView profileID={profileID} />
      <Footer />
    </div>
  );
}
