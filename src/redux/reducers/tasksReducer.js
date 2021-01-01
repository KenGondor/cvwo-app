import { FETCH_TASKS, ADD_TASK } from "../actions/actionTypes";

export default function tasksReducer(state = [], action) {
  console.log(action.type)
  switch (action.type) {
    case FETCH_TASKS:
        console.log("recuding")
        return action.payload;

    case ADD_TASK:
        return {
          ...state,
          items: state.items.concat(action.payload)
        };

    default:
      return state;
  }
}
