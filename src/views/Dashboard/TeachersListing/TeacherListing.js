import React, { useContext, useEffect, useState } from "react";
import useStyles from "./style";
// import Typography from "@mui/material/Typography";
import { Divider, Grid, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
// import { useRouter } from "next/router";
import EmailIcon from "@mui/icons-material/Email";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { getAllUserListings } from "../../../common/actions/dashboard";
import { GETALLENROLLEDUSER } from "../../../common/constants";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function TeacherListing(props) {
  const classes = useStyles();
  const router = useRouter();
  const [teachers, setTeachers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [season, setSeason] = React.useState("Spring 2021");

  useEffect(() => {
    setLoading(true);
    const request = {
      wsfunction: GETALLENROLLEDUSER,
      wstoken:
        localStorage.getItem("access_token") || Cookies.get("access_token"),
    };

    getAllUserListings(
      request,
      (res) => {
        setLoading(false);
        setTeachers(res.data.splice(3, 37));
      },
      (err) => {
        setLoading(false);
      }
    );
  }, []);

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
          {teachers.length > 0 && (
            <>
              <Typography variant="h3" className={classes.title}>
                <div>
                  <img src="/images/course.png" className={classes.img} />{" "}
                  <span className={classes.heading}>Teachers</span>
                </div>

                <span className={classes.season}>{season}</span>
                <span className={classes.totalLength}>
                  Total Teachers: {teachers.length}
                </span>
              </Typography>

              <Grid container>
                {teachers?.map((item) => (
                  <>
                    <Grid item xs={12}>
                      <div style={{ marginBottom: 20 }}>
                        <Typography
                          variant="h3"
                          className={classes.teacherName}
                        >
                          {item.fullname}
                        </Typography>
                        <Typography
                          variant="Body1"
                          className={classes.courseName}
                        >
                          Email:
                        </Typography>
                        <Stack direction="row" style={{ marginRight: 5 }}>
                          <Chip
                            icon={<EmailIcon />}
                            label={item.email}
                            color="success"
                            className={classes.chip}
                          />
                        </Stack>
                        <Typography
                          variant="Body1"
                          className={classes.courseName}
                        >
                          Courses:
                        </Typography>
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {item?.enrolledcourses?.map((course) => (
                            <Stack direction="row" style={{ marginRight: 5 }}>
                              <Chip
                                onClick={() =>
                                  router.push(
                                    `/dashboard/${course.fullname}/${course.id}`
                                  )
                                }
                                label={course.fullname}
                                color="success"
                                className={classes.chip}
                              />
                            </Stack>
                          ))}
                        </div>
                        <Typography
                          variant="Body1"
                          className={classes.courseName}
                        >
                          Sections:
                        </Typography>
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {item.groups.map((sections) => (
                            <Stack direction="row" style={{ marginRight: 5 }}>
                              <Chip
                                variant="outlined"
                                label={sections.name}
                                color="success"
                                className={classes.chip}
                              />
                            </Stack>
                          ))}
                        </div>
                      </div>
                      <Divider></Divider>
                    </Grid>
                  </>
                ))}
              </Grid>
            </>
          )}
        </>
      )}
    </div>
  );
}
