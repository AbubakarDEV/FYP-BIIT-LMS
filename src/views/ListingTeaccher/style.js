import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    listingContainer: {
      margin: theme.spacing(10, 2),
    },
    title: {
      color: theme.palette.typography.darkOrange,
      background: theme.palette.background.antiwhite,
      padding: 10,
    },
    teacherName: {
      textDecoration: "underline",
    },
  };
});
export default useStyles;
