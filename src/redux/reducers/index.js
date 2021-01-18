import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import visibilityFilterReducer from './visibilityFilterReducer';
import searchWordReducer from './searchWordreducer';
import modalOpenReducer from './modalOpenReducer';
import modalTaskReducer from './modalTaskReducer';

export default combineReducers({
  tasks: tasksReducer,
  visibilityFilter: visibilityFilterReducer,
  searchWord: searchWordReducer,
  modalOpen: modalOpenReducer,
  modalTask: modalTaskReducer,
});
