import { makeStyles } from "@mui/styles";

const drawerWidth = 240;
const sideDrawerStyles = makeStyles((theme) => ({
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    // width: drawerWidth,
  },
  drawerCnt: {
    width: 350,
    // [theme.breakpoints.down("xs")]: {
    //   width: 320,
    // },
  },
  drawerOpen: {
    width: drawerWidth,
    // top: 77,
  },
  drawerClose: {
    // top: 77,
    overflowX: "hidden",
    // width: 65,
    "& $listItemIcon": {
      minWidth: 52,
    },
  },
  toolbar: {
    // background: theme.palette.background.lightGray,
    display: "flex",
    justifyContent: "flex-start",
    height: 44,
    alignItems: "center",
    width: "100%",
  },
  menuTitle: {
    display: "flex",
    justifyContent: "center",
    width: "260px",
    marginTop: "auto",
  },
  toolbarOpen: {
    width: 240,
  },
  listItem: {
    padding: "10px 16px",
  },
  listItemIcon: {
    minWidth: 56,
  },
  closeIcon: {
    fontSize: 24,
  },
}));

export default sideDrawerStyles;
