import {
  List,
  ListItem,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { connect } from 'react-redux'
import ListItemCard from "./ListItemCard";
import { fetchTasks } from '../../redux/actions/tasksActions';

const useStyles = makeStyles({
  list: {
    width: "100%",
    overflow: "auto",
    maxHeight: "87vh",
  },
});

const mapStateToProps = state => ({
  tasks: state.tasks
});

function TaskList({ tasks }) {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      {tasks.map((task) => (
        <ListItem key={task.id}>
          <ListItemCard {...task} />
        </ListItem>
      ))}
    </List>
  );
}

export default connect(mapStateToProps)(TaskList);
