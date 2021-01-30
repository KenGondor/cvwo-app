import { ALL_TASK, TODAY, COMPLETED, OVERDUE } from "./filterConstants";

export const isDate = (string) => !isNaN(Date.parse(string));

const ciSearch = (a, b) => {
  if (typeof a === "string" && typeof b === "string") {
    if (a.search(new RegExp(b, "i")) >= 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// helper function to search for terms or keywords that task contains
const containsTerm = (task, term) => {
  return (
    ciSearch(task.name, term) ||
    ciSearch(task.description, term) ||
    ciSearch(task.tag, term)
  );
};

export const search = (tasks, term) => {
  return tasks.filter((task) => containsTerm(task, term));
};

export const removeUntagged = (arr) => {
  return arr.filter((elem) => elem !== null && elem.length !== 0);
};

export const createTags = (tasks) => {
  return removeUntagged(Array.from(new Set(tasks.map((task) => task.tag))));
};

export const acceptInput = (func, event) => {
  func(event.target.value);
};

const toDateString = (givenString) => new Date(givenString).toDateString();

const currentDateString = () => new Date(Date.now()).toDateString();

export const isDueToday = task => {
  return toDateString(task.due) === currentDateString();
};

const filterDueTodayTask = (tasks) => {
  return tasks.filter((task) => toDateString(task.due) === currentDateString());
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
      return filterDueTodayTask(filterIncompleteTask(tasks));

    case COMPLETED:
      return filterCompletedTask(tasks);

    case OVERDUE:
      return filterOverdueTask(tasks);

    default:
      return filterIncompleteTask(tasks).filter(
        (task) => task.tag === visibilityFilter
      );
  }
};
