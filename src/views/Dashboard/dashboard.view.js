import React, { useEffect } from "react";
import useStyles from "./style";
import Typography from "@mui/material/Typography";
import Footer from "../../common/components/footer/footer.cmt";
import { Grid } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "next/link";
import { getAllTeacher } from "../../common/actions/adminFunctions";
import {
  GETENROLLEDUSER,
  MOODLEFORMAT,
  SERVICE_NAME,
} from "../../common/constants";

export default function DashboardView() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(10);

  useEffect(() => {
    const request = {
      wsfunction: GETENROLLEDUSER,
      courseid: 1,
      moodlewsrestformat: MOODLEFORMAT,
      wstoken: "9a2b93cbf642fac78160b6d8ffd34646",
    };
    getAllTeacher(
      { request },
      (res) => {
        debugger;
      },
      (err) => {}
    );
  });
  const Cards = ({
    cardImage,
    Date,
    Title,
    isAssignment,
    AssignmentTitle,
    Assignment,
    cardWidth,
  }) => {
    return (
      <Link href="/dashboard/course/weeks">
        <Card sx={{ width: cardWidth }} className={classes.recentCoursesCard}>
          <CardMedia
            component="img"
            height="140"
            image="/images/cardimg3.jpg"
            alt="green iguana"
          />
          <CardContent className={classes.cardContent}>
            {isAssignment ? (
              <>
                <Typography
                  className={classes.cardDate}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {Assignment}
                </Typography>
                <Typography
                  className={classes.cardTitle}
                  variant="h4"
                  color="text.secondary"
                >
                  {AssignmentTitle}
                </Typography>
                <Typography
                  className={classes.submitBtn}
                  variant="body1"
                  color="text.secondary"
                >
                  Submit
                </Typography>
              </>
            ) : (
              <>
                <Typography
                  className={classes.cardDate}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {Date}
                </Typography>
                <Typography
                  className={classes.cardTitle}
                  variant="h4"
                  color="text.secondary"
                >
                  {Title}
                </Typography>
                <LinearProgress
                  variant="buffer"
                  value={progress}
                  style={{ marginTop: 10 }}
                />
              </>
            )}
          </CardContent>
        </Card>
      </Link>
    );
  };

  return (
    <>
      <div className={classes.dashboardCnt}>
        <Grid container spacing={5} className={classes.gridContainer}>
          <Grid item xs={12} sm={12} lg={8} md={8} className={classes.leftGrid}>
            <Typography variant="h3" className={classes.title}>
              <img src="/images/course.png" width={"40px"} /> Recently accessed
              courses
            </Typography>
            <div className={classes.cardsCnt}>
              <Cards
                cardWidth={240}
                Date="SPRING-22 CS-2022S"
                Title="COMMUNICATION SKILLS"
              />
              <Cards
                cardWidth={240}
                Date="SPRING-22 CS-2022S"
                Title="Web Enginnering"
              />
              <Cards
                cardWidth={240}
                Date="SPRING-22 CS-2022S"
                Title="Artificial Inteligrnce"
              />
            </div>
            <Typography variant="h3" className={classes.title}>
              <img src="/images/course2.png" width={"40px"} /> Course overview
            </Typography>
            <div className={classes.cardsCnt}>
              <Cards
                cardWidth={240}
                Date="SPRING-22 CS-2022S"
                Title="Programming Fundamentals"
              />
              <Cards
                cardWidth={240}
                Date="SPRING-22 CS-2022S"
                Title="Object Oriented Programming"
              />
              <Cards
                cardWidth={240}
                Date="SPRING-22 CS-2022S"
                Title="COMMUNICATION SKILLS"
              />
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            md={4}
            className={classes.rightGrid}
          >
            <Typography variant="h3" className={classes.title}>
              <img src="/images/schedule.png" width={"40px"} /> Timeline
            </Typography>
            <div className={classes.timeline}>
              <Cards
                cardWidth={300}
                isAssignment
                AssignmentTitle="COMMUNICATION SKILLS"
                Assignment="Assignment # 1"
              />
              <Cards
                cardWidth={300}
                isAssignment
                AssignmentTitle="Visual Programming"
                Assignment="Assignment # 2"
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
}
