import React from "react";
import {
  Paper,
  Checkbox,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { toggleCompletionStateOfTask } from '../../redux/actions/tasksActions';
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 40,
    display: 'flex'
  },
  checkBox: {

  },
  typographyStyles: {
    flex: 1,
    alignSelf: 'center',
    paddingLeft: '2%'
  }
}));

const mapDispatchToProps = (dispatch) => ({
  toggleCompletionStateOfTask: task => dispatch(toggleCompletionStateOfTask(task))
});

function ListItemCard({ task , toggleCompletionStateOfTask }) {
  const classes = useStyles();
  const handleChange = () => {
    let updatedTask = {
      ...task,
      completed: !task.completed
    };
    toggleCompletionStateOfTask(updatedTask);
  };

  return (
    <Paper className={classes.root}>
      <Typography className={classes.typographyStyles} noWrap variant='h6'>
        {task.name}
      </Typography>
      <IconButton className={classes.checkBox}>
        <Checkbox checked={task.completed} onChange={handleChange}/>
      </IconButton>
    </Paper>
  );
}

export default connect(null, mapDispatchToProps)(ListItemCard);
