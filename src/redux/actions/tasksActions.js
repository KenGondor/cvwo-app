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
        payload: res.data.map((task) => task.attributes),
      })
    )
    .catch((err) => console.log(err)); // Firefox network error when fetching from jsonapiplaceholder/todos
};

export const updateTask = ({
  id,
  name,
  start,
  due,
  priority,
  description,
  completed,
  tag,
}) => (dispatch) => {
  let url = `/api/v1/tasks/${id}`;
  let data = {
    mathod: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      start,
      due,
      priority,
      description,
      completed,
      tag,
    }),
  };

  fetch(url, data)
    .then((res) => res.json())
    .then((res) =>
      dispatch({
        type: types.UPDATE_TASK,
        payload: res.data.attributes
      })
    );
};

export const deleteTask = (id) => (dispatch) => {
  let url = `/api/v1/tasks/${id}`;
  fetch(url, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) =>
      dispatch({
        type: types.DELETE_TASK,
        payload: id,
      })
    )
    .catch((err) => console.log(err));
};

export const addTask = ({ name, start, due, priority, description, tag }) => (
  dispatch
) => {
  let url = "/api/v1/tasks";
  let data = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      start,
      due,
      priority,
      description,
      tag,
      completed: false,
    }),
  };
  fetch(url, data)
    .then((res) => res.json())
    .then((res) =>
      dispatch({
        type: types.ADD_TASK,
        payload: res.data.attributes,
      })
    );
};
