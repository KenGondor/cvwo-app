import React from "react";
import { connect } from "react-redux";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  makeStyles,
  Typography,
  Tab,
  Tabs,
} from "@material-ui/core";
import TodayIcon from "@material-ui/icons/Today";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { deleteTask } from "../redux/actions/tasksActions";
import setModalView from "../redux/actions/modalOpenAction.js";
import setModalTask from "../redux/actions/modalTaskAction.js";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#FFF",
    boxShadow: theme.shadows[3],
    padding: theme.spacing(2, 4, 3),
    width: 600,
    height: 750,
    borderRadius: "20px",
  },
  subheader: {
    display: "flex",
    alignItems: "center",
    marginTop: 10,
  },
  date: {
    marginLeft: 5,
  },
  deleteButton: {
    color: theme.palette.primary.main,
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  subOne: {
    display: "flex",
    marginTop: "1%",
  },
  tab: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const mapStateToProps = (state) => ({
  task: state.modalTask,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTask: (task) => dispatch(deleteTask(task.id)),
  setModalTask: (task) => dispatch(setModalTask(task)),
  setModalView: (open) => dispatch(setModalView(open)),
});

function TaskCard({ task, deleteTask, setModalView, setModalTask }) {
  const classes = useStyles();
  const delTask = () => {
    deleteTask(task);
    setModalView(false);
    setModalTask({});
  };
  const [value, setValue] = React.useState(0);
  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <Card className={classes.paper}>
      <CardHeader
        title={task.name}
        subheader={
          <div className={classes.subheader}>
            <div className={classes.column}>
              <div className={classes.subOne}>
                <TodayIcon />
                <Typography className={classes.date}>
                  {task.due === null ? "Not Due" : "Due: " + task.due}
                </Typography>
              </div>
              {task.start !== null ? (
                <div className={classes.subOne}>
                  <Typography>{"started: " + task.start}</Typography>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        }
        action={
          <IconButton onClick={delTask}>
            <DeleteForeverIcon className={classes.deleteButton} />
          </IconButton>
        }
      />
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Description" />
      </Tabs>
      <CardContent>
        <Typography variant="body2">
          {task.description !== null ? task.description : ""}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskCard);