import { ALL_TASK, TODAY, COMPLETED, OVERDUE } from "./filterConstants";

export const removeUntagged = (arr) => {
  return arr.filter((elem) => elem !== null && elem.length !== 0);
};

export const createTags = (tasks) => {
  return removeUntagged(Array.from(new Set(tasks.map((task) => task.tag))));
};

export const acceptInput = (func, event) => {
  func(event.target.value);
};

const filterDueTodayTask = (tasks) => {
  return tasks; // TODO::
};

export const filterOverdueTask = (tasks) => {
  return filterIncompleteTask(tasks).filter(
    (task) => new Date(task.due) < Date.now()
  );
};

export const getNumberOfOverdueTask = (tasks) => {
  return filterOverdueTask(tasks).length;
};

const filterCompletedTask = (tasks) => tasks.filter((task) => task.completed);

const filterIncompleteTask = (tasks) => tasks.filter((task) => !task.completed);

// Only shows the incomplete task per tag
export const taskVisibilityFilter = (visibilityFilter, tasks) => {
  switch (visibilityFilter) {
    case ALL_TASK:
      return filterIncompleteTask(tasks);

    case TODAY:
      return filterDueTodayTask(tasks);

    case COMPLETED:
      return filterCompletedTask(tasks);

    case OVERDUE:
      return filterOverdueTask(tasks);

    default:
      return tasks.filter((task) => task.tag === visibilityFilter);
  }
};
