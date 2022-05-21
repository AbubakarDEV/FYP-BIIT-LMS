import React, { useEffect, useContext } from "react";
import useStyles from "./style";
import Typography from "@mui/material/Typography";
import Footer from "../../common/components/footer/footer.cmt";
import { Grid } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { getCourses, getAllCourses } from "../../common/actions/dashboard";
import { GETENROLLEDCOURSES, GETALLCOURSES } from "../../common/constants";
import Context from "../../common/context/context";

export default function DashboardView() {
  const classes = useStyles();
  const router = useRouter();
  const [courses, setCourses] = React.useState([]);
  const ContextConsumer = useContext(Context);
  const { profile, dispatchCourses } = ContextConsumer;

  useEffect(() => {
    if (profile.id == 2) {
      const request = {
        wsfunction: GETALLCOURSES,
        wstoken:
          localStorage.getItem("access_token") || Cookies.get("access_token"),
      };
      getAllCourses(
        request,
        (res) => {
          setCourses(res.data);
          dispatchCourses({ type: "UPDATE_COURSE", value: res?.data });
        },
        (err) => {}
      );
    } else {
      const request = {
        userID: profile.id,
        wsfunction: GETENROLLEDCOURSES,
        wstoken:
          localStorage.getItem("access_token") || Cookies.get("access_token"),
      };
      getCourses(
        request,
        (res) => {
          setCourses(res.data);
          dispatchCourses({ type: "UPDATE_COURSE", value: res?.data });
        },
        (err) => {}
      );
    }
  }, []);

  const Cards = ({ Date, Title, cardWidth, link }) => {
    return (
      <Card
        onClick={
          profile.id == 2
            ? () => router.push(`/dashboard/teacherslisting/${link}`)
            : () => router.push(`/dashboard/${Title}/${link}`)
        }
        sx={{ width: cardWidth }}
        className={classes.recentCoursesCard}
      >
        <CardMedia
          component="img"
          height="140"
          image="/images/cardimg3.jpg"
          alt="green iguana"
        />
        <CardContent className={classes.cardContent}>
          <Typography
            className={classes.cardData}
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
        </CardContent>
      </Card>
    );
  };
  return (
    <>
      <div className={classes.dashboardCnt}>
        <Typography variant="h3" className={classes.title}>
          <img src="/images/course.png" width={"40px"} /> Enrolled courses
        </Typography>
        <Grid container spacing={5} className={classes.gridContainer}>
          {courses.length > 0 &&
            courses?.map((item) => (
              <Grid
                item
                xs={12}
                sm={12}
                lg={3}
                md={4}
                className={classes.leftGrid}
              >
                <Cards
                  cardWidth={250}
                  Date={item.shortname}
                  Title={item.displayname}
                  link={item.id}
                  endDate={item.enddate}
                  startDate={item.startdate}
                />
              </Grid>
            ))}
        </Grid>
      </div>
      <Footer />
    </>
  );
}
