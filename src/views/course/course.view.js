import React from "react";
import useStyles from "./style";
import Typography from "@mui/material/Typography";
import Footer from "../../common/components/footer/footer.cmt";
import { Divider, Grid, Paper } from "@mui/material";
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
      <div className={classes.courseCnt}>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} className={classes.leftGrid}>
            <Typography variant="h3" className={classes.title}>
              Enrolled courses
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
              <Cards
                cardWidth={240}
                Date="SPRING-22 CS-2022S"
                Title="COMMUNICATION SKILLS"
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
}
