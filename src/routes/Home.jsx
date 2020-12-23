// home page of the application
import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Header from "../components/Header";
import TaskList from "../components/listpane/TaskList";
// import ListPane from "../components/listpane/ListPane.jsx";
import image from '../images/wallpaper.jpg';

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover'
  },
  drawer: {
    backgroundColor: "grey",
  },
  listGrid: {
    backgroundColor: "lightblue",
  },
  viewGrid: {
    backgroundColor: 'pink'
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item container className={classes.header}>
        <Header />
      </Grid>
      <Grid item container direction="row">
        <Grid xs={0} sm={2} />
        <Grid
          item
          xs={12}
          sm={5}
          className={classes.listGrid}
          directiom="row"
        >
          <TaskList />
        </Grid>
        <Grid item xs={0} sm={3} className={classes.viewGrid}>
          frfreferferferfeferferferferferfer
        </Grid>
        <Grid xs={0} sm={2} />
      </Grid>
    </Grid>
  );
}
