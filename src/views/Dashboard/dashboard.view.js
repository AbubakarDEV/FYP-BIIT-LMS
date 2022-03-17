import React from "react";
import useStyles from "./style";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Button from "@mui/material/Button";
import Footer from "../../common/components/footer/footer.cmt";

export default function LoginView() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.dashboardCnt}>
        <div>
          <Typography variant="h3" className={classes.heading}>
            Timeline
          </Typography>

          <div className={classes.dashboardinnerCnt}>
            <div className={classes.timelineCnt}>
              <div className={classes.dueDateCnt}>
                <Typography variant="h6">Due Date:</Typography>
                <Typography variant="body2">Febuary 20, 2022</Typography>
              </div>
              <div className={classes.assignmnetCnt}>
                <img
                  src="./images/assignment.png"
                  className={classes.assignmnetLogo}
                />
                <Typography variant="body1">
                  Parallel Distributed Computting
                </Typography>
              </div>
              <Button variant="text" className={classes.submissionBtn}>
                <Link href={"./login"}>Add Submission</Link>
              </Button>
            </div>
            <div className={classes.timelineCnt}>
              <div className={classes.dueDateCnt}>
                <Typography variant="h6">Due Date:</Typography>
                <Typography variant="body2">Febuary 20, 2022</Typography>
              </div>
              <div className={classes.assignmnetCnt}>
                <img
                  src="./images/assignment.png"
                  className={classes.assignmnetLogo}
                />
                <Typography variant="body1">
                  Parallel Distributed Computting
                </Typography>
              </div>
              <Button variant="text" className={classes.submissionBtn}>
                <Link href={"./login"}>Add Submission</Link>
              </Button>
            </div>
            <div className={classes.timelineCnt}>
              <div className={classes.dueDateCnt}>
                <Typography variant="h6">Due Date:</Typography>
                <Typography variant="body2">Febuary 20, 2022</Typography>
              </div>
              <div className={classes.assignmnetCnt}>
                <img
                  src="./images/assignment.png"
                  className={classes.assignmnetLogo}
                />
                <Typography variant="body1">
                  Parallel Distributed Computting
                </Typography>
              </div>
              <Button variant="text" className={classes.submissionBtn}>
                <Link href={"./login"}>Add Submission</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className={classes.recentCnt}>
          <Typography variant="h3" className={classes.heading}>
            Recently accessed courses
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
      <Footer />
    </>
  );
}
