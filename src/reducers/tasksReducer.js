import { FETCH_TASKS, NEW_TASK } from "../actions/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_TASKS:
        return {
            ...state,
            items: action.payload
        };

    case NEW_TASK:
        return state;

    default:
      return state;
  }
}
