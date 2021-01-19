import React from "react";
import { Grid } from "@material-ui/core";
import TaskList from "./TaskList";
import AddTaskBar from "./AddTaskBar";

//component for laying out the view correctly
export default function ListPane(props) {
  return (
    <Grid container direction="column">
      <Grid container item>
        <TaskList />
      </Grid>
      <Grid container item>
        <AddTaskBar />
      </Grid>
    </Grid>
  );
}
