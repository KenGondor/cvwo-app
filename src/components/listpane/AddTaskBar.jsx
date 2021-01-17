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
import { addTask } from "../../redux/actions/tasksActions";
import { connect } from "react-redux";
import { Autocomplete } from "@material-ui/lab";
import { createTags, acceptInput, isDate } from "../../utils/utils";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderRadius: 5,
  },
  addButton: {
    marginLeft: theme.spacing(1),
  },
  title: {
    marginLeft: 20,
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

const mapStateToProps = (state) => ({
  tags: createTags(state.tasks),
});

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(addTask(task)),
});

function AddTaskBar({ tags, addTask }) {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [start, setStart] = React.useState("");
  const [due, setDue] = React.useState("");
  const [priority, setPriority] = React.useState("");
  const [tag, setTag] = React.useState(null);
  const [dateErrorState, setDateErrorState] = React.useState(false);
  const getHelperText = () => {
    return dateErrorState ? 'Invalid Date: yyyy-MM-dd' : '';
  };
  const [taskIsCorrect, setTaskIsCorrect] = React.useState(true);
  const validateDateAndWrite = (func, event) => {
    func(event.target.value)
    if (event.target.value.length === 0 || isDate(event.target.value)) {
      setDateErrorState(false);
    } else {
      setDateErrorState(true);
    }
  };
  const taskifyAndAdd = () => {
    let task = {
      name: name.trim(),
      start: start.trim(),
      due: due.trim(),
      priority: priority.trim(),
      tag,
    };
    console.log(task);
    addTask(task);
    setName("");
    setStart("");
    setDue("");
    setPriority("");
    setTag(null);
    setDateErrorState(false);
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
              value={name}
              onChange={(event) => acceptInput(setName, event)}
            />
            <TextField
              id="start-input"
              className={classes.input}
              variant="outlined"
              label="Start"
              size="small"
              value={start}
              onChange={(event) => acceptInput(setStart, event)}
            />
            <TextField
              id="due-input"
              className={classes.input}
              variant="outlined"
              label="Due"
              size="small"
              value={due}
              onChange={(event) => validateDateAndWrite(setDue, event)}
              helperText={getHelperText()}
              error={dateErrorState}
            />
            <TextField
              id="priority-input"
              className={classes.input}
              variant="outlined"
              label="Priority"
              size="small"
              required
              value={priority}
              onChange={(event) => acceptInput(setPriority, event)}
            />
            <Autocomplete
              style={{ width: "20%" }}
              options={tags}
              freeSolo
              onChange={(event, value) => {
                setTag(value);
              }}
              getOptionLabel={(option) => option}
              value={tag}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className={classes.input}
                  variant="outlined"
                  label="Tag"
                  size="small"
                  onChange={(event) => acceptInput(setTag, event)}
                />
              )}
            />
          </form>
          <Typography variant="h6" className={classes.title}>
            Add
          </Typography>
          <IconButton
            edge="start"
            className={classes.addButton}
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

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskBar);
