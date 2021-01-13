import { List, makeStyles } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import ListItemCard from "./ListItemCard";
import { taskVisibilityFilter } from "../../utils/utils";

const useStyles = makeStyles({
  list: {
    width: "100%",
    overflow: "auto",
    maxHeight: "87vh",
  },
});

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  visibilityFilter: state.visibilityFilter,
});

function TaskList({ tasks, visibilityFilter }) {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      {taskVisibilityFilter(visibilityFilter, tasks).map((task) => (
        <ListItemCard task={task} />
      ))}
    </List>
  );
}

export default connect(mapStateToProps)(TaskList);
