import { Card, CardHeader, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#FF00FF",
    boxShadow: theme.shadows[3],
    padding: theme.spacing(2, 4, 3),
    minWidth: 300,
    minHeight: 300,
  },
}));

function TaskCard({ task }) {
  const classes = useStyles();

  return (
    <Card className={classes.paper}>
      <p>Hello from taskcard</p>
      <CardHeader>
          <Typography>{task.name}</Typography>
      </CardHeader>
    </Card>
  );
}

export default TaskCard;
