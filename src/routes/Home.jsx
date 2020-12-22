// home page of the application
import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Header from "../components/Header";
import TaskList from "../components/listpane/TaskList";
// import ListPane from "../components/listpane/ListPane.jsx";

const useStyles = makeStyles({
  drawer: {
    backgroundColor: "grey",
  },
  listGrid: {
    flexGrow: 1,
    backgroundColor: "lightblue",
  },
  viewGrid: {
    flexGrow: 1,
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item className={classes.header}>
        <Header />
      </Grid>
      <Grid item container direction="row">
        <Grid xs={0} sm={2} />
        <Grid item xs={12} sm={4} className={classes.listGrid} directiom="row">
          <TaskList />
        </Grid>
        <Grid item xs={0} sm={4} className={classes.viewGrid}>
          frfreferferferfeferferferferferfer
        </Grid>
        <Grid xs={0} sm={2} />
      </Grid>
    </Grid>
  );
}
