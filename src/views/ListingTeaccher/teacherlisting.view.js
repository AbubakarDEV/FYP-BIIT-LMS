import React, { useEffect, useState } from "react";
import useStyles from "./style";
import Footer from "../../common/components/footer/footer.cmt";
import { Divider, Grid, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import EmailIcon from "@mui/icons-material/Email";
export default function TeacherlistingView(props) {
  const { teacherListing } = props;
  const router = useRouter();
  const classes = useStyles();

  const [teacherListings, setTeacherListings] = useState(teacherListing);
  const [studentListings, setStudentListings] = useState(teacherListing);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setLoading(true);

    const courseCode = localStorage.getItem("courseCode");
    // const EditTeacher = teacherListing.filter(
    //   (item) => item?.roles[0]?.shortname == "editingteacher"
    // );
    // const Courses = EditTeacher.map((item) => item.enrolledcourses);
    // setTeacherListings(
    //   Courses[0].filter(
    //     (ii) => ii.shortname.split("-")[1] == courseCode.split("-")[1]
    //   )
    // );
    setTeacherListings(
      teacherListing.filter(
        (item) => item?.roles[0]?.shortname == "editingteacher"
      )
    );
    setLoading(false);
  }, []);

  useEffect(() => {
    setLoading(true);

    setStudentListings(
      studentListings.filter(
        (item) => item?.roles[0]?.shortname != "editingteacher"
      )
    );
    setLoading(false);
  }, []);

  return (
    <>
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
        <div className={classes.listingContainer}>
          {teacherListings?.length > 0 && (
            <>
              <Typography variant="h3" className={classes.title}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <img src="/images/course.png" width={"40px"} /> Teachers
                  </div>
                  <span>Total Teachers: {teacherListings.length}</span>
                </div>
              </Typography>
              {teacherListings?.map((item) => (
                <>
                  <div style={{ marginBottom: 20 }}>
                    <Typography variant="h3" className={classes.teacherName}>
                      {item.fullname}{" "}
                    </Typography>
                    <Typography variant="Body1" className={classes.courseName}>
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
                    <div>
                      <Typography
                        variant="Body1"
                        className={classes.courseName}
                      >
                        Courses:
                      </Typography>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      {item?.enrolledcourses?.map((course) => (
                        <Stack direction="row" style={{ margin: 5 }}>
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
                    <Typography variant="Body1" className={classes.courseName}>
                      Sections:
                    </Typography>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      {item?.groups?.map((sections) => (
                        <Stack direction="row" style={{ margin: 5 }}>
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
                </>
              ))}
            </>
          )}

          {studentListings.length > 0 && (
            <>
              <Typography variant="h3" className={classes.title}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <img src="/images/course.png" width={"40px"} /> Students
                  </div>
                  <span>Total Students: {studentListings.length}</span>
                </div>
              </Typography>

              <Grid container>
                {studentListings?.map((item) => (
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
                        <Stack direction="row" style={{ margin: 5 }}>
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
                            <Stack direction="row" style={{ margin: 5 }}>
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
                            <Stack direction="row" style={{ margin: 5 }}>
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
        </div>
      )}

      <Footer />
    </>
  );
}
