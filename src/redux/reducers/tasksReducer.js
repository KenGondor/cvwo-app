import {
  FETCH_TASKS,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  UPDATE_COMPLETETION
} from "../actions/actionTypes";

export default function tasksReducer(state = [], action) {
  switch (action.type) {
    case FETCH_TASKS:
      console.log("fetching tasks");
      return action.payload;

    case ADD_TASK:
      console.log("adding task");
      return [...state, action.payload];

    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);

    case UPDATE_TASK:
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        } else {
          return task;
        }
      });

    case UPDATE_COMPLETETION:
      return state.map(task => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            completed: action.payload.completed
          };
        } else {
          return task;
        }
      })
      
    default:
      return state;
  }
}
