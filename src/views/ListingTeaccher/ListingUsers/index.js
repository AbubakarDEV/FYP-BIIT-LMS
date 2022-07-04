import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import StudentlistingView from "../listingStudent/studentlisting.view";
import TeacherlistingView from "../listingTeacher/teacherlisting.view";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function UserListingView(props) {
  const { teacherListing } = props;

  const [teacherListings, setTeacherListings] = useState(teacherListing);
  const [loading, setLoading] = React.useState(false);
  const [studentListings, setStudentListings] = useState(teacherListing);
  const [value, setValue] = React.useState("students");

  const handleChange = (event) => {
    setLoading(true);

    setValue(event.target.value);
    setLoading(false);
  };
  useEffect(() => {
    setLoading(true);
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
      <Box style={{ marginTop: 80, padding: "0px 10px" }}>
        <FormControl style={{ display: "flex" }}>
          <RadioGroup value={value} onChange={handleChange}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FormControlLabel
                value="students"
                control={<Radio />}
                label="Students"
                size="small"
              />
              <FormControlLabel
                value="teachers"
                control={<Radio />}
                label="teachers"
              />
            </div>
          </RadioGroup>
        </FormControl>
        {value == "students" ? (
          <StudentlistingView studentListing={studentListings} />
        ) : (
          <TeacherlistingView teacherListing={teacherListings} />
        )}
      </Box>
    </>
  );
}
