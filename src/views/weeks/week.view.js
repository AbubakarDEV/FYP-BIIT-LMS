import React from "react";
import useStyles from "./style";
import Typography from "@mui/material/Typography";

export default function WeekView() {
  const classes = useStyles();

  return (
    <div className={classes.courseCnt}>
      <Typography variant="h2" className={classes.heading}>
        INFORMATION SECURITY
      </Typography>

      <div className={classes.weekCnt}>
        <img src="./images/folder.png" className={classes.folderImg} />
        <Typography variant="h3" className={classes.heading}>
          Week 1 (4 October - 10 October)
        </Typography>
      </div>
      <div className={classes.weekCnt}>
        <img src="./images/folder.png" className={classes.folderImg} />
        <Typography variant="h3" className={classes.heading}>
          Week 2 (11 October - 17 October)
        </Typography>
      </div>
      <div className={classes.weekCnt}>
        <img src="./images/folder.png" className={classes.folderImg} />
        <Typography variant="h3" className={classes.heading}>
          Week 3 (18 October - 24 October)
        </Typography>
      </div>
      <div className={classes.weekCnt}>
        <img src="./images/folder.png" className={classes.folderImg} />
        <Typography variant="h3" className={classes.heading}>
          Week 4 (25 October - 31 October)
        </Typography>
      </div>
      <div className={classes.weekCnt}>
        <img src="./images/folder.png" className={classes.folderImg} />
        <Typography variant="h3" className={classes.heading}>
          Week 5 (1 November - 7 November)
        </Typography>
      </div>
      <div className={classes.weekCnt}>
        <img src="./images/folder.png" className={classes.folderImg} />
        <Typography variant="h3" className={classes.heading}>
          Week 6 (8 November - 14 November)
        </Typography>
      </div>
      <div className={classes.weekCnt}>
        <img src="./images/folder.png" className={classes.folderImg} />
        <Typography variant="h3" className={classes.heading}>
          Week 7 (15 November - 21 November)
        </Typography>
      </div>
      <div className={classes.weekCnt}>
        <img src="./images/folder.png" className={classes.folderImg} />
        <Typography variant="h3" className={classes.heading}>
          Week 8 (22 November - 28 November)
        </Typography>
      </div>
      <div className={classes.weekCnt}>
        <img src="./images/folder.png" className={classes.folderImg} />
        <Typography variant="h3" className={classes.heading}>
          Week 9 (29 November - 5 December)
        </Typography>
      </div>
      <div className={classes.weekCnt}>
        <img src="./images/folder.png" className={classes.folderImg} />
        <Typography variant="h3" className={classes.heading}>
          Week 10 (6 December - 12 December)
        </Typography>
      </div>
    </div>
  );
}
