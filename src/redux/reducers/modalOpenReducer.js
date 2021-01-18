import { TOGGLE_MODAL_VIEW } from "../actions/actionTypes";

export default function modalOpenReducer(state = false, action) {
  switch (action.type) {
    case TOGGLE_MODAL_VIEW:
      return action.payload;

    default:
      return state;
  }
}
