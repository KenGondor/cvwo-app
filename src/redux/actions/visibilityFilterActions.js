import { SET_FILTER } from "./actionTypes";

const setVisibilityFilter = (filteringTag) => (dispatch) =>
  dispatch({
    type: SET_FILTER,
    payload: filteringTag,
  });

  export default setVisibilityFilter;
