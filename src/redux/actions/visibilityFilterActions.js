import { SET_FILTER } from "./actionTypes";

export const setVisibilityFilter = (filteringTag) => (dispatch) =>
  dispatch({
    type: SET_FILTER,
    payload: filteringTag,
  });
