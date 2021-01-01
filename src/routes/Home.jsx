// home page of the application
import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Header from "../components/Header.jsx";
import ListPane from "../components/listpane/ListPane";
import Image from "../images/wallpaper.jpg";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
  },
  viewbox: {
    backgroundColor: "white",
  },
  list: {
    borderRadius: 5,
  },
  task: {
    backgroundColor: "blue",
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.root}>
      <Header />
      <Grid container>
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={10} className={classes.viewbox}>
          <ListPane />
        </Grid>
        <Grid xs={0} sm={1} />
      </Grid>
    </Grid>
  );
}
