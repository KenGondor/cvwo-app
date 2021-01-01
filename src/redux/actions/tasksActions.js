import * as types from "./actionTypes";

const fetchTasksThunk = (tasks) => ({
  type: types.FETCH_TASKS,
  payload: tasks,
});

export const fetchTasks = () => (dispatch) => {
  console.log("fetching");
  fetch("/api/v1/tasks")
    .then((res) => res.json())
    .then((res) =>
      dispatch({
        type: types.FETCH_TASKS,
        payload: res.data.map(task => task.attributes),
      })
    )
    .catch((err) => console.log(err));
};
