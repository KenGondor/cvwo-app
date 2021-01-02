import { FETCH_TASKS, ADD_TASK } from "../actions/actionTypes";

export default function tasksReducer(state = [], action) {
  console.log(action.type);
  switch (action.type) {
    case FETCH_TASKS:
      console.log("recuding");
      return action.payload;

    case ADD_TASK:
      console.log("adding tasks");
      return state;

    default:
      return state;
  }
}
