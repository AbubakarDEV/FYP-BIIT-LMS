import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ActiveCourses from "./ActiveCourses/activeCourses";
import StudentListing from "./StudentsListing/studentListing";
import TeacherListing from "./TeachersListing/TeacherListing";
import ListIcon from "@mui/icons-material/List";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function DashboardView() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%" }} style={{ marginTop: 80 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            aria-label="basic tabs example"
          >
            <Tab icon={<ListIcon />} label="Active Courses" {...a11yProps(0)} />
            <Tab
              icon={<PersonPinIcon />}
              label="Active Students"
              {...a11yProps(1)}
            />
            <Tab
              icon={<SupervisedUserCircleIcon />}
              label="Active Teachers"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <ActiveCourses />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <StudentListing />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TeacherListing />
        </TabPanel>
      </Box>
    </>
  );
}
