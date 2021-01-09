import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import visibilityFilterReducer from './visibilityFilterReducer';

export default combineReducers({
  tasks: tasksReducer,
  visibilityFilter: visibilityFilterReducer,
});
