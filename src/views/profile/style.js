import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    profileCnt: {
      padding: "80px 20px 30px 20px",
      // padding: theme.spacing(8, 5),

      // [theme.breakpoints.down("sm")]: {
      //   padding: theme.spacing(8, 0),
      // },
      // [theme.breakpoints.only("md")]: {
      //   padding: theme.spacing(8, 1),
      // },
    },
    gridContainer: {
      padding: "20px 0px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    captionCnt: {
      // [theme.breakpoints.down("sm")]: {
      //   padding: 20,
      // },
    },
    profileimgGrid: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    galleryImgCnt: {
      position: "relative",
    },
    galleryImg: {
      // Width: 150,
      height: 150,
    },
    editIcon: {
      position: "absolute",
      bottom: -50,
      left: 70,
      fontSize: 16,
      fontWeight: 600,
      padding: 10,
      cursor: "pointer",
      color: "gray",
      background: "#d3d3d359",
    },
    uploadImageContainer: {
      border: "1px solid blue",
      borderStyle: "dashed",
      minHeight: "150px",
      height: "100%",
      width: "250px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "ease all 0.2s",
      "&:hover": {
        background: "blue",
        transition: "ease all 0.2s",
      },
      "&:hover h4": {
        color: "white",
        transition: "ease all 0.3s",
      },
      "&:hover svg": {
        color: "white",
        transition: "ease all 0.3s",
      },
    },
    uploadProgress: {
      width: "100px",
      marginBottom: 5,
    },
    uploadImageGridItem: {
      width: 180,
      height: 180,
      border: "1px solid blue",
      borderStyle: "dotted",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "ease all 0.2s",
      background: "white",
      boxShadow:
        "0px -1px 5px 1px rgb(0 0 0 / 5%), 0px 1px 1px 0px rgb(0 0 0 / 5%), 0px 1px 3px 0px rgb(0 0 0 / 5%)",
      "&:hover": {
        background: "blue",
        transition: "ease all 0.2s",
      },
      "&:hover h4": {
        color: "white",
        transition: "ease all 0.3s",
      },
      "&:hover svg": {
        color: "white",
        transition: "ease all 0.3s",
      },
    },
    uploadIcon: {
      fontSize: 48,
      color: "blue",
    },

    textfieldGrid: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
    },
    emailTextfield: {
      marginBottom: 10,
      width: 300,
      background: "#d3d3d359",
    },
    changePassword: {
      margin: "20px 0px",
    },
    passwordBtn: {
      width: 200,
      position: "absolute",
      right: 0,
      top: 10,
    },
    profileBtn: {
      width: 200,
      position: "absolute",
      right: 0,
    },
    caption: {
      letterSpacing: 1,
    },
  };
});
export default useStyles;
