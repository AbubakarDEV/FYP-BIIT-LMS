import React from "react";
import { GETLATESUBMISSION } from "../../common/constants";
import Cookies from "js-cookie";
import { getAssignmenParticipants } from "../../common/actions/dashboard";
import { Grid, Typography } from "@mui/material";
import styles from "./assignment.module.css";

export default function AssignmetView() {
  const [lateResponse, setLateResponseData] = React.useState([]);
  const [inTimeResponse, setIntimeResponseData] = React.useState([]);

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    const allUsers = JSON.parse(localStorage.getItem("allUsers"));

    const request = {
      wsfunction: GETLATESUBMISSION,
      wstoken:
        localStorage.getItem("access_token") || Cookies.get("access_token"),
      assignedID: localStorage.getItem("assignmentID"),
    };
    const timeStamp = localStorage.getItem("timeStamp", timeStamp);

    getAssignmenParticipants(
      request,
      (res) => {
        const users = res?.data?.assignments[0]?.submissions.filter(
          (item) => item.status != "new"
        );
        const getIDS = users.map((item) => ({
          id: item.userid,
          submission: item.plugins[0].fileareas[0].files[0].timemodified,
        }));

        const lateSubmission = getIDS.map((item) =>
          item.submission > timeStamp
            ? { lateID: item.id }
            : { intimeID: item.id }
        );

        const allIdsintime = lateSubmission.map((item) => item.intimeID);
        const allIdslate = lateSubmission.map((item) => item.lateID);
        const inTimedata = allUsers.filter((item) =>
          allIdsintime.includes(item.id)
        );

        const lateData = allUsers.filter((item) =>
          allIdslate.includes(item.id)
        );

        setLateResponseData(lateData);
        setIntimeResponseData(inTimedata);

        setLoading(false);
      },
      (err) => {}
    );
  }, []);

  return (
    <div className={styles.assignmnetContainer}>
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
          <Grid container style={{ height: "100vh" }}>
            <Grid item lg={6} sm={12} xs={12} className={styles.inTimeCnt}>
              {inTimeResponse.length ? (
                <>
                  <Typography
                    variant="h4"
                    style={{
                      background: "green",
                      padding: 20,
                      color: "white",
                      fontSize: 22,
                      // marginTop: 50,
                    }}
                  >
                    Intime Submission: ({inTimeResponse.length})
                  </Typography>

                  {inTimeResponse.map((item) => (
                    <div
                      style={{
                        padding: 20,
                        background: "#e6ede6",
                        marginBottom: 10,
                      }}
                    >
                      <Typography variant="h5">{item?.fullname}</Typography>
                      <Typography variant="h5">{item?.email}</Typography>
                    </div>
                  ))}
                </>
              ) : (
                <div className={styles.noDataCnt}>
                  <img src="/images/assignment.png" width={200} />
                  <Typography variant="h4" className={styles.noDate}>
                    NO Data for In time submission
                  </Typography>
                </div>
              )}
            </Grid>
            <Grid
              item
              lg={6}
              sm={12}
              xs={12}
              className={styles.lateSubmissionCnt}
            >
              {lateResponse.length ? (
                <>
                  <Typography
                    variant="h4"
                    style={{
                      background: "red",
                      padding: 20,
                      color: "white",
                      fontSize: 22,
                      // marginTop: 50,
                    }}
                  >
                    Late Submission: ({lateResponse.length})
                  </Typography>
                  {lateResponse.map((item) => (
                    <div
                      style={{
                        padding: 20,
                        background: "#e6ede6",
                        marginBottom: 10,
                      }}
                    >
                      <Typography variant="h5">{item?.fullname}</Typography>
                      <Typography variant="h5">{item?.email}</Typography>
                    </div>
                  ))}
                </>
              ) : (
                <div className={styles.noDataCnt}>
                  <img src="/images/assignment.png" width={200} />
                  <Typography variant="h4" className={styles.noDate}>
                    NO Data for late submission
                  </Typography>
                </div>
              )}
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
}
