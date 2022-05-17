import React, { useEffect, useState } from "react";
import useStyles from "./style";
import Footer from "../../common/components/footer/footer.cmt";
import { Typography } from "@mui/material";

export default function TeacherlistingView(props) {
  const { teacherListing } = props;
  const classes = useStyles();
  const [teacherListings, setTeacherListings] = useState(teacherListing);
  const [studentListings, setStudentListings] = useState(teacherListing);

  useEffect(() => {
    setTeacherListings(
      teacherListing.filter(
        (item) => item.roles[0].shortname == "editingteacher"
      )
    );
  }, []);
  useEffect(() => {
    setStudentListings(
      studentListings.filter(
        (item) => item.roles[0].shortname != "editingteacher"
      )
    );
  }, []);

  return (
    <>
      <div className={classes.listingContainer}>
        {teacherListings.length > 0 && (
          <>
            <Typography variant="h3" className={classes.title}>
              <img src="/images/course.png" width={"40px"} /> Teachers Listings
            </Typography>
            {teacherListings?.map((item) => (
              <>
                <Typography variant="h3" className={classes.teacherName}>
                  {item.fullname}
                </Typography>
                <Typography variant="h6">Courses taught by teacher</Typography>

                {item.enrolledcourses.map((course) => (
                  <Typography variant="body1">{course.fullname}</Typography>
                ))}
              </>
            ))}
          </>
        )}

        {studentListings.length > 0 && (
          <>
            <Typography variant="h3" className={classes.title}>
              <img src="/images/course.png" width={"40px"} /> Student Listings
            </Typography>
            {studentListings?.map((item) => (
              <Typography variant="h6">{item.fullname}</Typography>
            ))}
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
