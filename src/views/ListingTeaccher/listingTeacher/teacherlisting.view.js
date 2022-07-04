import React, { useEffect, useState } from "react";
import useStyles from "./style";
import Footer from "../../../common/components/footer/footer.cmt";
import { Divider, Grid, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import EmailIcon from "@mui/icons-material/Email";

export default function TeacherlistingView(props) {
  const { teacherListing, loading } = props;
  const router = useRouter();
  const classes = useStyles();

  const [teacherListings, setTeacherListings] = useState(teacherListing);
  // const [loading, setLoading] = React.useState(loading);

  useEffect(() => {
    setTeacherListings(teacherListing);
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
                <img src="/images/user.png" className={classes.imgIcon} />
                Total Teachers: {teacherListings.length}
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
        </div>
      )}

      {/* <Footer /> */}
    </>
  );
}
