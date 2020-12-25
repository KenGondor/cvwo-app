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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderRadius: 5,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: 10
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

export default function AddTaskBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="sceondary">
        <CssBaseline />
        <Toolbar variant="dense">
          <form className={classes.form}>
            <TextField
              id=""
              className={classes.input}
              variant="outlined"
              label="Name"
              size="small"
              required
            />
            <TextField
              id=""
              className={classes.input}
              variant="outlined"
              label="Start"
              size="small"
            />
            <TextField
              id=""
              className={classes.input}
              variant="outlined"
              label="Due"
              size="small"
            />
            <TextField
              id=""
              className={classes.input}
              variant="outlined"
              label="Priority"
              size="small"
              required
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
          >
            <AddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
