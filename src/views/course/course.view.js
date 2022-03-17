import React from "react";
import useStyles from "./style";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function CourseView() {
  const classes = useStyles();

  return (
    <div className={classes.courseCnt}>
      <div className={classes.recentCnt}>
        <Typography variant="h3" className={classes.heading}>
          Enrolled Courses
        </Typography>

        <div className={classes.dashboardinnerCnt}>
          <Link href={"/weeks"}>
            <div className={classes.recentinnerCnt}>
              <div>
                <img
                  className={classes.recentImg}
                  src="./images/recentCourses.jpg"
                />
              </div>
              <div className={classes.recentContentCnt}>
                <Typography variant="body1">FALL-2021 | CC-2021F</Typography>
                <Typography variant="h6">Compiler Construction</Typography>
              </div>
            </div>
          </Link>
          <Link href={"/weeks"}>
            <div className={classes.recentinnerCnt}>
              <div>
                <img
                  className={classes.recentImg}
                  src="./images/recentCourses.jpg"
                />
              </div>
              <div className={classes.recentContentCnt}>
                <Typography variant="body1">FALL-2021 | IS-2021F</Typography>
                <Typography variant="h6">Information Security</Typography>
              </div>
            </div>
          </Link>
          <Link href={"/weeks"}>
            <div className={classes.recentinnerCnt}>
              <div>
                <img
                  className={classes.recentImg}
                  src="./images/recentCourses.jpg"
                />
              </div>
              <div className={classes.recentContentCnt}>
                <Typography variant="body1">FALL-2021 | PDC-2021F</Typography>
                <Typography variant="h6">
                  Parallel Distributed Computting
                </Typography>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
