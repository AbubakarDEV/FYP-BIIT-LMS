import React from "react";
import { PARTICIPANTASSIGNMENTS } from "../../common/constants";
import Cookies from "js-cookie";
import { getAssignmenParticipants } from "../../common/actions/dashboard";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useStyles from "./style";
import { Typography } from "@mui/material";

export default function AssignmetView() {
  const classes = useStyles();

  const [responseData, setResponseData] = React.useState([]);
  const [totalSubmitted, setTotalSubmitted] = React.useState([]);
  const [totalNotSubmit, setTotalNotSubmit] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    const request = {
      wsfunction: PARTICIPANTASSIGNMENTS,
      wstoken:
        localStorage.getItem("access_token") || Cookies.get("access_token"),
      assignedID: localStorage.getItem("assignmentID"),
    };
    getAssignmenParticipants(
      request,
      (res) => {
        setTotalSubmitted(res.data.filter((item) => item.submitted));
        setTotalNotSubmit(res.data.filter((item) => !item.submitted));
        setResponseData(res.data);
        setLoading(false);
      },
      (err) => {}
    );
  }, []);

  return (
    <div className={classes.assignmnetContainer}>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "500px",
            flexDirection: "column",
          }}
        >
          <img src="/images/loader.gif" width={"100px"} height="100px" />
          Loading data
        </div>
      ) : (
        <>
          <div className={classes.filter}>
            <Typography variant="h4">
              Total Students:{" "}
              <span className={classes.totalLength}>{responseData.length}</span>
            </Typography>
            <Typography variant="h4">
              Total Submission:{" "}
              <span className={classes.totalLength}>
                {totalSubmitted.length}
              </span>
            </Typography>
            <Typography variant="h4">
              Total Not Submitted:{" "}
              <span className={classes.totalLength}>
                {totalNotSubmit.length}
              </span>
            </Typography>
          </div>
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead style={{ background: "blue" }}>
                <TableRow style={{ fontWeight: 800 }}>
                  <TableCell className={classes.tableHeader} align="center">
                    Reg NO
                  </TableCell>
                  <TableCell align="center" className={classes.tableHeader}>
                    fullname
                  </TableCell>
                  <TableCell align="center" className={classes.tableHeader}>
                    Section
                  </TableCell>
                  <TableCell align="center" className={classes.tableHeader}>
                    Submittion Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {responseData.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{row.username}</TableCell>
                    <TableCell align="center">{row.fullname}</TableCell>
                    <TableCell align="center">{row.groups[0]?.name}</TableCell>
                    <TableCell
                      align="center"
                      style={{ fontWeight: 800, fontSize: 22, color: "orange" }}
                    >
                      {row.submitted ? "Submitted" : "Not Submitted"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
}
