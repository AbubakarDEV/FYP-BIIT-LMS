import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import sideDrawerStyles from "./drawer.style";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
import CustomIconButton from "../../src/common/icons//IconButton/IconButton.cmp";
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

export default function PersistentDrawerLeft() {
  const [open, setOpen] = React.useState(false);
  const classes = sideDrawerStyles();
  const router = useRouter();
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

  const Item = ({ children, text, path }) => {
    return (
      <ListItem
        button
        className={classes.listItem}
        onClick={(e) => handleItemClick(e, path)}
      >
        <ListItemIcon className={classes.listItemIcon}>{children}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    );
  };
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
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
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
        // variant="persistent"
        anchor="left"
        open={open}
      >
        <CustomIconButton
          style={{
            padding: "5px 15px",
            borderRadius: 0,
            height: 44,
            // background: theme.palette.background.lightGray1,
          }}
          onClick={handleDrawerClose}
        >
          <CloseIcon className={classes.closeIcon} />
        </CustomIconButton>
        <Item text="Dashboard" path="/dashboard">
          <img src="./images/dashboard.png" style={{ width: 25 }} />
        </Item>
        <Item text="Courses" path="/course">
          <img src="./images/folder.png" style={{ width: 25 }} />
        </Item>
        <Item text="Profile" path="/profile">
          <img src="./images/profile.png" style={{ width: 25 }} />
        </Item>
        <Item text="Weeks" path="/weeks">
          <img src="./images/weeks.png" style={{ width: 25 }} />
        </Item>
      </Drawer>
    </Box>
  );
}
