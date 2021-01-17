import { SET_SEARCH_WORD } from "../actions/actionTypes";

export default function searchWordreducer(state = "", action) {
  switch (action.type) {
    case SET_SEARCH_WORD:
      return action.payload;

    default:
      return state;
  }
}
