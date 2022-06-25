import React, { useEffect } from "react";
import useStyles from "./style";
import Typography from "@mui/material/Typography";
import Footer from "../../common/components/footer/footer.cmt";
import CustomAccordian from "../../common/components/accordian/Accordian";
import { Grid } from "@mui/material";
import Cookies from "js-cookie";
import { DIRECTORTOKEN } from "../../common/constants";
import { useRouter } from "next/router";

export default function WeekView(props) {
  const classes = useStyles();
  const router = useRouter();
  const { courseContent, courseName } = props;
  const [courseContentData, setCourseContent] = React.useState(courseContent);
  const [token, setToken] = React.useState();

  useEffect(() => {
    setCourseContent(courseContent);
    setToken(Cookies.get("access_token"));
  }, []);

  const handleAssignmnet = (timeStamp, instanceID) => {
    localStorage.setItem("timeStamp", timeStamp);
    localStorage.setItem("assignmentID", instanceID);
    router.push("/dashboard/assignment");
  };

  return (
    <>
      <div className={classes.weeksContainer}>
        <Typography variant="h2" className={classes.heading}>
          {courseName}
        </Typography>

        {DIRECTORTOKEN == token && (
          <>
            {courseContentData?.map((item) => (
              <>
                <CustomAccordian
                  titleElement={item.section}
                  date={item.name}
                  style={{ boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.15)" }}
                  ContentStyles={{ style: { overflowY: "hidden" } }}
                  content={
                    <>
                      {item.modules.length > 0 ? (
                        <div className={classes.optionsCnt}>
                          {item.modules.map((mod, index) => (
                            <>
                              {mod?.modplural != "Assignments" ? (
                                <a
                                  href={
                                    mod?.modplural == "URLs"
                                      ? mod.contents[0].fileurl
                                      : mod.url
                                  }
                                  target="_blank"
                                  style={{ textDecoration: "none" }}
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      marginBottom: 20,
                                    }}
                                  >
                                    <img
                                      src={mod?.modicon}
                                      style={{
                                        width: 20,
                                        height: 20,
                                        marginRight: 10,
                                      }}
                                    />
                                    <Typography
                                      variant="h4"
                                      style={{
                                        margin: 0,
                                        color: "gray",
                                        fontSize: 20,
                                      }}
                                    >
                                      {mod?.name}
                                    </Typography>
                                  </div>
                                </a>
                              ) : (
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: 20,
                                  }}
                                  onClick={() =>
                                    handleAssignmnet(
                                      mod?.dates[1]?.timestamp,
                                      mod.instance
                                    )
                                  }
                                >
                                  <img
                                    src={mod?.modicon}
                                    style={{
                                      width: 20,
                                      height: 20,
                                      marginRight: 10,
                                    }}
                                  />
                                  <Typography
                                    variant="h4"
                                    style={{
                                      margin: 0,
                                      color: "gray",
                                      fontSize: 20,
                                    }}
                                  >
                                    {mod?.name}
                                  </Typography>
                                </div>
                              )}
                            </>
                          ))}
                        </div>
                      ) : (
                        <>No Content added Yet</>
                      )}
                    </>
                  }
                />
              </>
            ))}
          </>
        )}
        {/* {courseContentData?.map((item) => (
          <>
            <CustomAccordian
              titleElement={item.section}
              date={item.name}
              style={{ boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.15)" }}
              ContentStyles={{ style: { overflowY: "hidden" } }}
              content={
                <>
                  {item.modules.length > 0 ? (
                    <div className={classes.optionsCnt}>
                      {item.modules.map((mod, index) => (
                        <>
                          <a
                            href={
                              mod?.modplural == "URLs"
                                ? mod.contents[0].fileurl
                                : mod.url
                            }
                            target="_blank"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: 20,
                              }}
                            >
                              <img
                                src={mod?.modicon}
                                style={{
                                  width: 20,
                                  height: 20,
                                  marginRight: 10,
                                }}
                              />
                              <Typography
                                variant="h4"
                                style={{
                                  margin: 0,
                                  color: "gray",
                                  fontSize: 20,
                                }}
                              >
                                {mod?.name}
                              </Typography>
                            </div>
                          </a>
                        </>
                      ))}
                    </div>
                  ) : (
                    <>No Content added Yet</>
                  )}
                </>
              }
            />
          </>
        ))} */}
      </div>
      <Footer />
    </>
  );
}
