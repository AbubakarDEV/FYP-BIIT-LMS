import React from "react";
import useStyles from "./style";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import Footer from "../../common/components/footer/footer.cmt";

export default function WeekView() {
  const classes = useStyles();
  const Weeks = ({ weekNo, startDate, endDate }) => {
    return (
      <div className={classes.weekCnt}>
        <img src="/images/folder.png" className={classes.folderImg} />
        <Typography variant="h3" className={classes.heading}>
          Week {weekNo} ({startDate} - {endDate})
        </Typography>
      </div>
    );
  };

  return (
    <>
      <div className={classes.weeksContainer}>
        <Typography variant="h2" className={classes.heading}>
          INFORMATION SECURITY
        </Typography>
        <Weeks weekNo="1" startDate="1 April" endDate="7 April" />
        <Weeks weekNo="2" startDate="8 April" endDate="15 April" />
        <Weeks weekNo="3" startDate="16 April" endDate="23 April" />
        <Weeks weekNo="4" startDate="24 April" endDate="30 April" />
        <Weeks weekNo="5" startDate="1 May" endDate="7 May" />
        <Weeks weekNo="6" startDate="8 May" endDate="15 May" />
        <Weeks weekNo="7" startDate="16 May" endDate="23 May" />
        <Weeks weekNo="8" startDate="24 May" endDate="30 May" />

        <Typography align="center" variant="h3" className={classes.mid}>
          Mid Term
        </Typography>
        <Weeks weekNo="9" startDate="24 May" endDate="30 May" />

        <Weeks weekNo="10" startDate="24 May" endDate="30 May" />

        <Weeks weekNo="11" startDate="24 May" endDate="30 May" />
      </div>
      <Footer />
    </>
  );
}
