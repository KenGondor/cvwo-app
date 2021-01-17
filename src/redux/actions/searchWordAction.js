import { SET_SEARCH_WORD } from "./actionTypes";

const setSearchWord = (word) => (dispatch) =>
  dispatch({
    type: SET_SEARCH_WORD,
    payload: word,
  });

export default setSearchWord;
