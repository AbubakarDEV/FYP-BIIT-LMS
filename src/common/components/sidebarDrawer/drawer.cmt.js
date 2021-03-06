import React, { useContext, useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";
import Context from "../../context/context";
import styles from "./drawer.module.css";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function SideDrawer() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const ContextConsumer = useContext(Context);
  const { dispatch } = ContextConsumer;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  //Handle Item Click
  const handleItemClick = (e, path) => {
    router.push(path);
  };
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    document.cookie =
      "access_token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/";

    dispatch({ type: "UPDATE_PROFILE", value: {} });

    router.push("/login");
  };
  const Item = ({ children, text, path }) => {
    return (
      <ListItem
        button
        className={styles.listItem}
        onClick={(e) => handleItemClick(e, path)}
      >
        <ListItemIcon className={styles.listItemIcon}>{children}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    );
  };

  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("profileData"));
    setResponseData(data);
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <div className={styles.appBarCnt}>
            <Typography variant="h6" noWrap component="div">
              BIIT LMS
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              {responseData?.fullname && (
                <Typography variant="body1" className={styles.username}>
                  {responseData?.fullname}
                </Typography>
              )}
              <Avatar
                alt="Remy Sharp"
                src={responseData?.profileimageurlsmall || "/images/user.png"}
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        anchor="left"
        open={open}
      >
        <div
          style={{
            height: 44,
            position: "relative",
          }}
        >
          <CloseIcon onClick={handleDrawerClose} className={styles.closeIcon} />
        </div>
        <Item text="Dashboard" path="/dashboard">
          <img src="/images/dashboard.png" style={{ width: 25 }} />
        </Item>
        {/* <Item text="Courses" path="/dashboard/course">
          <img src="/images/folder.png" style={{ width: 25 }} />
        </Item>
        <Item text="Weeks" path="/dashboard/course/weeks">
          <img src="/images/weeks.png" style={{ width: 25 }} />
        </Item> */}
        <Item text="Profile" path="/dashboard/profile">
          <img src="/images/profile.png" style={{ width: 25 }} />
        </Item>
        {/* <Item text="Logout" path="/login">
          
        </Item> */}
        <ListItem button className={styles.listItem} onClick={handleLogout}>
          <ListItemIcon className={styles.listItemIcon}>
            <img src="/images/logout.png" style={{ width: 25 }} />
          </ListItemIcon>
          <ListItemText primary={"Logout"} />
        </ListItem>
      </Drawer>
    </Box>
  );
}
