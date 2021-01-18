import { SET_MODAL_TASK } from "./actionTypes";

const setModalTask = (task) => (dispatch) =>
  dispatch({
    type: SET_MODAL_TASK,
    payload: task,
  });

export default setModalTask;
