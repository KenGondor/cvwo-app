import {
  Checkbox,
  Grid,
  IconButton,
  List,
  ListItem,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import ListItemCard from "./ListItemCard";
import data from "../../data";

const useStyles = makeStyles({
  list: {
    width: "100%",
    overflow: "auto",
    maxHeight: "87vh",
  },
});

export default function TaskList() {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      {data.map((task) => (
        <ListItem key={task.id}>
          <ListItemCard {...task} />
        </ListItem>
      ))}
    </List>
  );
}
