// home page of the application
import React from "react";
import { makeStyles } from "@material-ui/core";
import Drawer from "../components/drawer/Drawer.jsx";
import ListPane from "../components/listpane/ListPane.jsx";

const useStyles = makeStyles({
  container: {
    display: 'flex',
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Drawer />
      <div>
        HI
      </div>
    </div>
  );
}
