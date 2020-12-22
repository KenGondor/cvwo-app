import React from "react";
import PaneHeader from "./PaneHeader";
import TaskList from "./TaskList";

export default function ListPane() {
  return (
    <div>
      <PaneHeader />
      <TaskList />
    </div>
  );
}
