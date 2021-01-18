import { TOGGLE_MODAL_VIEW } from "./actionTypes";

const toggleModalView = (open) => (dispatch) =>
  dispatch({
    type: TOGGLE_MODAL_VIEW,
    payload: open,
  });

export default toggleModalView;
