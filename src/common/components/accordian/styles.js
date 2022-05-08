import { makeStyles } from "@mui/styles";

const AccordianStyles = makeStyles(() => ({
  container: {
    width: "100%",
    fontSize: 20,
    border: "2px solid black",
    borderRadius: 20,
    fontWeight: 600,
    boxShadow: "20px 20px 5px 0px rgba(0,0,0,0.15)",
    marginBottom: 20,
    "& .Mui-expanded": {
      minHeight: 30,
      maxHeight: 40,
      marginBottom: 20,
    },
  },
  content: {
    maxHeight: 300,
    overflowY: "scroll",
    paddingTop: 0,
    "& ul": {
      paddingTop: 0,
    },
  },
}));

export default AccordianStyles;
