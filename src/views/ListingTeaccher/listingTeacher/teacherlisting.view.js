import React, { useEffect, useState } from "react";
import Footer from "../../../common/components/footer/footer.cmt";
import { Divider, Grid, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import EmailIcon from "@mui/icons-material/Email";
import styles from "./teacherlisting.module.css";

export default function TeacherlistingView(props) {
  const { teacherListing } = props;
  const router = useRouter();

  const [teacherListings, setTeacherListings] = useState();
  useEffect(() => {
    setTeacherListings(
      teacherListing.filter(
        (item) => item?.roles[0]?.shortname == "editingteacher"
      )
    );
  }, []);

  return (
    <>
      <div className={styles.listingContainer}>
        {teacherListings?.length > 0 && (
          <>
            <Typography variant="h3" className={styles.title}>
              <img src="/images/user.png" className={styles.imgIcon} />
              Total Teachers: {teacherListings.length}
            </Typography>
            {teacherListings?.map((item) => (
              <>
                <div style={{ marginBottom: 20 }}>
                  <Typography variant="h3" className={styles.teacherName}>
                    {item.fullname}{" "}
                  </Typography>
                  <Typography variant="Body1" className={styles.courseName}>
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
                  <div>
                    <Typography variant="Body1" className={styles.courseName}>
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
                          className={styles.chip}
                        />
                      </Stack>
                    ))}
                  </div>
                  <Typography variant="Body1" className={styles.courseName}>
                    Sections:
                  </Typography>
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {item?.groups?.map((sections) => (
                      <Stack direction="row" style={{ margin: 5 }}>
                        <Chip
                          variant="outlined"
                          label={sections.name}
                          color="success"
                          className={styles.chip}
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

      {/* <Footer /> */}
    </>
  );
}
