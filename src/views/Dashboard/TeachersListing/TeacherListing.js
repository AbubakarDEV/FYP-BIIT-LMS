import React, { useContext, useEffect, useState } from "react";
import { Divider, Grid, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import EmailIcon from "@mui/icons-material/Email";
import { useRouter } from "next/router";
import styles from "./TeacherListing.module.css";

export default function TeacherListing(props) {
  const router = useRouter();
  const [teachers, setTeachers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [season, setSeason] = React.useState("Spring 2021");

  useEffect(() => {
    const allusers = JSON.parse(localStorage.getItem("allUsers"));
    if (allusers.length) {
      setTeachers(allusers?.splice(3, 37));
    }
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
          {teachers.length > 0 ? (
            <>
              <Typography variant="h3" className={styles.title}>
                <div>
                  <img src="/images/course.png" className={styles.img} />{" "}
                  <span className={styles.season}>{season}</span>
                </div>
                <span className={styles.totalLength}>
                  Total Teachers: {teachers.length}
                </span>
              </Typography>

              <Grid container>
                {teachers?.map((item) => (
                  <>
                    <Grid item xs={12}>
                      <div style={{ marginBottom: 20 }}>
                        <Typography variant="h3" className={styles.teacherName}>
                          {item.fullname}
                        </Typography>
                        <Typography
                          variant="Body1"
                          className={styles.courseName}
                        >
                          Email:
                        </Typography>
                        <Stack direction="row" style={{ marginRight: 5 }}>
                          <Chip
                            icon={<EmailIcon />}
                            label={item.email}
                            color="success"
                            className={styles.chip}
                          />
                        </Stack>
                        <Typography
                          variant="Body1"
                          className={styles.courseName}
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
                                className={styles.chip}
                              />
                            </Stack>
                          ))}
                        </div>
                        {item.groups.length > 0 && (
                          <>
                            <Typography
                              variant="Body1"
                              className={styles.courseName}
                            >
                              Sections:
                            </Typography>
                            <div style={{ display: "flex", flexWrap: "wrap" }}>
                              {item.groups.map((sections) => (
                                <Stack
                                  direction="row"
                                  style={{ marginRight: 5 }}
                                >
                                  <Chip
                                    variant="outlined"
                                    label={sections.name}
                                    color="success"
                                    className={styles.chip}
                                  />
                                </Stack>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                      <Divider></Divider>
                    </Grid>
                  </>
                ))}
              </Grid>
            </>
          ) : (
            <div className={styles.noListingFound}>
              <img src="/images/book.png" width={"100px"} />
              <Typography variant="h3"> No Listing found</Typography>
            </div>
          )}
        </>
      )}
    </div>
  );
}
