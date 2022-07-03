import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ListIcon from "@mui/icons-material/List";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import StudentlistingView from "../listingStudent/studentlisting.view";
import TeacherlistingView from "../listingTeacher/teacherlisting.view";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledbiy={`simple-tab-${index}`}
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

export default function UserListingView(props) {
  const [value, setValue] = React.useState(0);
  const { teacherListing } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%" }} style={{ marginTop: 80 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} variant="fullWidth">
            <Tab icon={<ListIcon />} label="Students" {...a11yProps(0)} />
            <Tab icon={<PersonPinIcon />} label="Teachers" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <StudentlistingView teacherListing={teacherListing} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TeacherlistingView teacherListing={teacherListing} />
        </TabPanel>
      </Box>
    </>
  );
}
