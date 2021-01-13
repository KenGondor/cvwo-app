import React from "react";
import {
  Paper,
  Checkbox,
  IconButton,
  makeStyles,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { toggleCompletionStateOfTask } from "../../redux/actions/tasksActions";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 40,
    display: "flex",
  },
  typographyStyles: {
    alignSelf: "center",
    paddingLeft: "2%",
  },
}));

const mapDispatchToProps = (dispatch) => ({
  toggleCompletionStateOfTask: (task) =>
    dispatch(toggleCompletionStateOfTask(task)),
});

function ListItemCard({ task, toggleCompletionStateOfTask }) {
  const classes = useStyles();
  const handleChange = () => {
    let updatedTask = {
      ...task,
      completed: !task.completed,
    };
    toggleCompletionStateOfTask(updatedTask);
  };
  const showTask = () => {

  };

  return (
    <ListItem key={task.id} button onCLick={showTask}>
      <Paper className={classes.root} elevation="0">
        <ListItemText primary={task.name} className={classes.typographyStyles}/>
        <IconButton>
          <Checkbox
            checked={task.completed}
            onChange={handleChange}
            color="primary"
          />
        </IconButton>
      </Paper>
    </ListItem>
  );
}

export default connect(null, mapDispatchToProps)(ListItemCard);
