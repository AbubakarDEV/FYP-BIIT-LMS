import React, { useEffect } from "react";
import useStyles from "./style";
import Typography from "@mui/material/Typography";
import Footer from "../../common/components/footer/footer.cmt";
import CustomAccordian from "../../common/components/accordian/Accordian";

export default function WeekView(props) {
  const classes = useStyles();
  const { courseContent, courseName } = props;
  const [courseContentData, setCourseContent] = React.useState(courseContent);
  useEffect(() => {
    setCourseContent(courseContent);
  }, []);

  return (
    <>
      <div className={classes.weeksContainer}>
        <Typography variant="h2" className={classes.heading}>
          {courseName}
        </Typography>

        {courseContentData?.map((item) => (
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
                        {item.name == "General" ? (
                          <>No Content Added yet</>
                        ) : (
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
        ))}
      </div>
      <Footer />
    </>
  );
}
