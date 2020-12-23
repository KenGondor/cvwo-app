import { List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import React from "react";
import TaskCard from "./TaskCard";

const tasks = [
  {
    id: 1,
    name: "Errands1",
  },
  {
    id: 2,
    name: "Errands2",
  },
  {
    id: 3,
    name: "Errands3",
  },
  {
    id: 4,
    name: "Errands4",
  },
  {
    id: 5,
    name: "Errands5",
  },
  {
    id: 6,
    name: "Errands6",
  },
  {
    id: 7,
    name: "Errands7",
  },
  {
    id: 8,
    name: "Errands8",
  },
  {
    id: 9,
    name: "Errands9",
  },
  {
    id: 10,
    name: "Errands10",
  },
  {
    id: 11,
    name: "Errands11",
  },
  {
    id: 12,
    name: "Errands12",
  },
  {
    id: 13,
    name: "Errands13",
  },
  {
    id: 14,
    name: "Errands14",
  },
];

const useStyles = makeStyles({
  list: {
    overflow: "auto",
    maxHeight: 876,
  },
});

export default function TaskList() {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      {tasks.map((task) => (
        <ListItem key={task.id}>
          <TaskCard name={task.name} />
        </ListItem>
      ))}
    </List>
  );
}
