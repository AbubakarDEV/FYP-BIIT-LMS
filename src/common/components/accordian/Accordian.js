// @flow
import React from "react";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import styles from "./Accordian.module.css";

export default function CustomAccordian(props) {
  const {
    titleElement,
    content,
    icon,
    date,
    ContentStyles,
    SummaryStyles,
    ...rest
  } = props;
  return (
    <MuiAccordion className={styles.container} {...rest}>
      <MuiAccordionSummary
        expandIcon={
          icon || <ArrowForwardIosSharpIcon style={{ color: "white" }} />
        }
        className={styles.summary}
        {...SummaryStyles}
      >
        Week {titleElement} - {date}
      </MuiAccordionSummary>
      <MuiAccordionDetails className={styles.content} {...ContentStyles}>
        {content}
      </MuiAccordionDetails>
    </MuiAccordion>
  );
}
