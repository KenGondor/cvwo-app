import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import visibilityFilterReducer from './visibilityFilterReducer';
import searchWordReducer from './searchWordreducer';

export default combineReducers({
  tasks: tasksReducer,
  visibilityFilter: visibilityFilterReducer,
  searchWord: searchWordReducer,
});
