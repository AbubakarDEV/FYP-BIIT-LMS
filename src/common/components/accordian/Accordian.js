// @flow
import React from "react";
import AccrodianStyles from "./styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

export default function CustomAccordian(props) {
  const classes = AccrodianStyles();
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
    <MuiAccordion className={classes.container} {...rest}>
      <MuiAccordionSummary
        expandIcon={
          icon || <ArrowForwardIosSharpIcon style={{ color: "white" }} />
        }
        className={classes.summary}
        {...SummaryStyles}
      >
        Week {titleElement} - {date}
      </MuiAccordionSummary>
      <MuiAccordionDetails className={classes.content} {...ContentStyles}>
        {content}
      </MuiAccordionDetails>
    </MuiAccordion>
  );
}
