import React from "react";
import {
  AppBar,
  CssBaseline,
  IconButton,
  makeStyles,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { addTask } from '../../redux/actions/tasksActions';
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderRadius: 5,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: 10,
  },
  form: {
    margin: theme.spacing(1),
    display: "flex",
    width: "25ch",
    flex: 3,
  },
  input: {
    marginLeft: 5,
    marginRight: 5,
  },
}));

const mapDispatchToProps = (dispatch) => ({
  addTask: task => dispatch(addTask(task))
});

function AddTaskBar({ addTask }) {
  const classes = useStyles();
  const [ name, setName ] = React.useState('');
  const [ start, setStart ] = React.useState('');
  const [ due, setDue ] = React.useState('');
  const [ priority, setPriority ] = React.useState(0);
  const taskifyAndAdd = () => {
    let task = {
      name,
      start,
      due,
      priority
    }
    console.log(task);
    addTask(task);
    return task;
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="sceondary">
        <CssBaseline />
        <Toolbar variant="dense">
          <form className={classes.form}>
            <TextField
              id="name-input"
              className={classes.input}
              variant="outlined"
              label="Name"
              size="small"
              required
              onChange={event => setName(event.target.value)}
            />
            <TextField
              id="start-input"
              className={classes.input}
              variant="outlined"
              label="Start"
              size="small"
              onChange={event => setStart(event.target.value)}
            />
            <TextField
              id="due-input"
              className={classes.input}
              variant="outlined"
              label="Due"
              size="small"
              onChange={event => setDue(event.target.value)}
            />
            <TextField
              id="priority-input"
              className={classes.input}
              variant="outlined"
              label="Priority"
              size="small"
              required
              onChange={event => setPriority(event.target.value)}
            />
          </form>
          <Typography variant="h6" className={classes.title}>
            Add Task
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="add task"
            onClick={taskifyAndAdd}
          >
            <AddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(AddTaskBar);
