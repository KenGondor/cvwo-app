import { SET_FILTER } from "../actions/actionTypes";

export default function visibilityFilterReducer(state = '', action) {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;

    default:
      return state;
  }
}
