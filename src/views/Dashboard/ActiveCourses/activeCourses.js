import React, { useContext, useEffect } from "react";
import useStyles from "./style";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { getCourses, getAllCourses } from "../../../common/actions/dashboard";
import { GETENROLLEDCOURSES, GETALLCOURSES } from "../../../common/constants";
import Context from "../../../common/context/context";
import ListIcon from "@mui/icons-material/List";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function ActiveCourses(props) {
  const { applyStyle } = props;
  const classes = useStyles();
  const router = useRouter();
  const [courses, setCourses] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [season, setSeason] = React.useState("Spring 2021");
  const [selectSeason, setSelectSeason] = React.useState("Spring 2021");

  const handleChange = (event) => {
    setSeason(event.target.value);
    setSelectSeason(event.target.value);
  };
  const ContextConsumer = useContext(Context);
  const { profile, dispatchCourses } = ContextConsumer;
  useEffect(() => {
    setLoading(true);
    if (profile.id == 2) {
      const request = {
        wsfunction: GETALLCOURSES,
        wstoken:
          localStorage.getItem("access_token") || Cookies.get("access_token"),
      };
      getAllCourses(
        request,
        (res) => {
          setLoading(false);
          if (selectSeason == "Spring 2021") {
            setCourses(
              res.data.filter((itm) => itm.shortname.split("-")[1] == "2021S")
            );
          } else {
            setCourses(
              res.data.filter((itm) => itm.shortname.split("-")[1] == "2020F")
            );
          }

          dispatchCourses({ type: "UPDATE_COURSE", value: res?.data });
        },
        (err) => {
          setLoading(false);
        }
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
          setLoading(false);

          if (selectSeason == "Spring 2021") {
            setCourses(
              res.data.filter((itm) => itm.shortname.split("-")[1] == "2021S")
            );
          } else {
            setCourses(
              res.data.filter((itm) => itm.shortname.split("-")[1] == "2020F")
            );
          }
          dispatchCourses({ type: "UPDATE_COURSE", value: res?.data });
        },
        (err) => {
          setLoading(false);
        }
      );
      setLoading(false);
    }
  }, [selectSeason]);

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
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "500px",
            flexDirection: "column",
          }}
        >
          <img src="/images/loader.gif" width={"100px"} height="100px" />
          Loading data
        </div>
      ) : (
        <>
          {courses.length > 0 ? (
            <div
              className={
                applyStyle
                  ? classes.activeCourseCnt
                  : classes.activeAdminCourseCnt
              }
            >
              <Typography variant="h3" className={classes.title}>
                <div>
                  {" "}
                  <img src="/images/course.png" width={"40px"} /> Enrolled
                  courses
                </div>
                <span>
                  <FormControl className={classes.select}>
                    <InputLabel>Select Season</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={selectSeason}
                      onChange={handleChange}
                    >
                      <MenuItem value={"Spring 2021"}>Spring 2021</MenuItem>
                      <MenuItem value={"Fall 2020"}>Fall 2020</MenuItem>
                    </Select>
                  </FormControl>
                </span>
                <spam>Total Courses:{courses.length}</spam>
              </Typography>

              <Grid container spacing={5} className={classes.gridContainer}>
                <>
                  {courses?.map((item) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
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
                </>
              </Grid>
            </div>
          ) : (
            <>
              {loading && (
                <div className={classes.noListingFound}>
                  <img src="/images/book.png" width={"100px"} />
                  <Typography variant="h3"> No Listing found</Typography>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}