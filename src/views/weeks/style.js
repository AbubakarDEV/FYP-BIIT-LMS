import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    weekCnt: {
      padding: 20,
      display: "flex",
      alignItems: "center",
    },
    folderImg: {
      width: 40,
      marginRight: 20,
    },
    heading: {
      margin: 0,
    },
    mid: {
      background: theme.palette.background.blueMedium,
      letterSpacing: 20,
      fontWeight: 800,
      margin: 0,
      padding: 10,
      color: theme.palette.typography.darkGray,
    },
  };
});
export default useStyles;
