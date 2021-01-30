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
  TextField,
} from "@material-ui/core";
import TodayIcon from "@material-ui/icons/Today";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { deleteTask, updateTask } from "../redux/actions/tasksActions";
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
  taskDescription: {},
}));

const mapStateToProps = (state) => ({
  task: state.modalTask,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTask: (task) => dispatch(deleteTask(task.id)),
  updateTask: (task) => dispatch(updateTask(task)),
  setModalTask: (task) => dispatch(setModalTask(task)),
  setModalView: (open) => dispatch(setModalView(open)),
});

function EditPanel(props) {
  return <div hidden={props.index !== props.tabValue}>hfioewh</div>;
}

function DescriptionPanel(props) {
  return (
    <div hidden={props.index !== props.tabValue}>
      <TextField
        className={props.className}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
        fullWidth
        multiline
        variant="outlined"
      >
        {props.children}
      </TextField>
    </div>
  );
}

function TaskCard({
  task,
  deleteTask,
  updateTask,
  setModalView,
  setModalTask,
}) {
  const [value, setValue] = React.useState(task.description);
  const [tabVal, setTabVal] = React.useState(0);
  React.useEffect(() => {
    return () => {
      updateTask({
        id: task.id,
        description: value,
      });
    };
  });
  const classes = useStyles();
  const delTask = () => {
    deleteTask(task);
    setModalView(false);
    setModalTask({});
  };
  const handleChange = (value) => {
    setValue(value);
  };

  const changeTab = (event, value) => {
    setTabVal(value);
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
                  <Typography style={{ marginLeft: 30 }}>
                    {"Started: " + task.start}
                  </Typography>
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
      <Tabs
        value={tabVal}
        onChange={changeTab}
        indicatorColor="primary"
        fullWidth
      >
        <Tab label="Description" />
        <Tab label="Edit dates" />
      </Tabs>
      <CardContent>
        <DescriptionPanel
          className={classes.taskDescription}
          onChange={(event) => handleChange(event.target.value)}
          defaultValue={value}
          fullWidth
          multiline
          variant="outlined"
          index={0}
          tabValue={tabVal}
        >
          {task.description}
        </DescriptionPanel>
        <EditPanel index={1} tabValue={tabVal}></EditPanel>
      </CardContent>
    </Card>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskCard);
