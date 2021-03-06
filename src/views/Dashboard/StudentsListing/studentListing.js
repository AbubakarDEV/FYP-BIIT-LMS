import React, { useEffect, useState } from "react";
// import useClasses from "./style";
import { Divider, Grid, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import EmailIcon from "@mui/icons-material/Email";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { getAllUserListings } from "../../../common/actions/dashboard";
import { GETALLENROLLEDUSER } from "../../../common/constants";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import styles from "./studentListing.module.css";

export default function TeacherListing() {
  // const styles = useStyles();
  const router = useRouter();
  const [students, setStudents] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [season, setSeason] = React.useState("Spring 2021");
  const [selectSeason, setSelectSeason] = React.useState("Spring 2021");

  const handleChange = (event) => {
    setSeason(event.target.value);
    setSelectSeason(event.target.value);
  };
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
        if (selectSeason == "Spring 2021") {
          setStudents(res.data.splice(341, 500));
        } else {
          setStudents(res.data.splice(40, 341));
        }
      },
      (err) => {
        setLoading(false);
      }
    );
  }, [selectSeason]);

  return (
    <div>
      <div>
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
              {students.length > 0 ? (
                <>
                  <Typography variant="h3" className={styles.title}>
                    <div>
                      <img src="/images/course.png" width={"40px"} />
                      <span className={styles.season}>{season}</span>
                    </div>
                    <span>
                      <FormControl className={styles.select}>
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
                    <span>Total Students: {students.length}</span>
                  </Typography>

                  <Grid container>
                    {students?.map((item) => (
                      <>
                        <Grid item xs={12}>
                          <div style={{ marginBottom: 20 }}>
                            <Typography
                              variant="h3"
                              className={styles.teacherName}
                            >
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
                                <Stack
                                  direction="row"
                                  style={{ marginRight: 5 }}
                                >
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
                                <div
                                  style={{ display: "flex", flexWrap: "wrap" }}
                                >
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
      </div>
    </div>
  );
}
