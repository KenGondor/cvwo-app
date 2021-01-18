import { SET_MODAL_TASK } from "../actions/actionTypes";

export default function modalTaskReducer(state = {}, action) {
  switch (action.type) {
    case SET_MODAL_TASK:
      return action.payload;

    default:
      return state;
  }
}
