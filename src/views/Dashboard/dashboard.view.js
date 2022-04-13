import React from "react";
import useStyles from "./style";
import Typography from "@mui/material/Typography";
import Footer from "../../common/components/footer/footer.cmt";
import { Grid } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function DashboardView() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(10);
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
    );
  };
  return (
    <>
      <div className={classes.dashboardCnt}>
        <Grid container spacing={5} className={classes.gridContainer}>
          <Grid item xs={8} lg={8} md={8} className={classes.leftGrid}>
            <Typography variant="h3" className={classes.title}>
              Recently accessed courses
            </Typography>
            {/* <Divider /> */}
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
              Course overview
            </Typography>
            {/* <Divider></Divider> */}
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

          <Grid item xs={4} lg={4} md={4} className={classes.rightGrid}>
            <Typography variant="h3" className={classes.title}>
              Timeline
            </Typography>
            {/* <Divider></Divider> */}
            <div className={classes.timeline}>
              <Cards
                cardWidth={350}
                isAssignment
                AssignmentTitle="COMMUNICATION SKILLS"
                Assignment="Assignment # 1"
              />
              <Cards
                cardWidth={350}
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
