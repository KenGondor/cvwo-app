import { List, makeStyles } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import ListItemCard from "./ListItemCard";
import { taskVisibilityFilter, search } from "../../utils/utils";
import { CUSTOM } from "../../utils/filterConstants";

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
  searchWord: state.searchWord,
});

function TaskList({ tasks, visibilityFilter, searchWord }) {
  const classes = useStyles();
  const filterTasks = () => {
    if (visibilityFilter === CUSTOM) {
      return search(tasks, searchWord);
    } else {
      return taskVisibilityFilter(visibilityFilter, tasks);
    }
  };

  return (
    <List className={classes.list}>
      {filterTasks().map((task) => (
        <ListItemCard task={task} />
      ))}
    </List>
  );
}

export default connect(mapStateToProps)(TaskList);
