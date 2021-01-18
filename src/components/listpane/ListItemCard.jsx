import React from "react";
import {
  Checkbox,
  IconButton,
  makeStyles,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { connect } from "react-redux";
import { toggleCompletionStateOfTask } from "../../redux/actions/tasksActions";
import setModalTask from "../../redux/actions/modalTaskAction.js";
import setModalView from "../../redux/actions/modalOpenAction";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 50,
  },
  typographyStyles: {
    alignSelf: "center",
    paddingLeft: "2%",
  },
}));

const mapDispatchToProps = (dispatch) => ({
  setModalView: (open) => dispatch(setModalView(open)),
  setModalTask: (task) => dispatch(setModalTask(task)),
  toggleCompletionStateOfTask: (task) =>
    dispatch(toggleCompletionStateOfTask(task)),
});

function ListItemCard({
  task,
  toggleCompletionStateOfTask,
  setModalTask,
  setModalView,
}) {
  const classes = useStyles();
  const handleChange = () => {
    let updatedTask = {
      ...task,
      completed: !task.completed,
    };
    toggleCompletionStateOfTask(updatedTask);
  };
  const showTask = (task) => {
    setModalTask(task);
    setModalView(true);
  };

  return (
    <ListItem
      key={task.id}
      button
      onClick={() => showTask(task)}
      className={classes.root}
    >
      <ListItemText primary={task.name} className={classes.typographyStyles} />
      <IconButton>
        <Checkbox
          checked={task.completed}
          onChange={handleChange}
          color="primary"
        />
      </IconButton>
    </ListItem>
  );
}

export default connect(null, mapDispatchToProps)(ListItemCard);
