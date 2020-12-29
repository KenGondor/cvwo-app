// store creation
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {
    tasks: [],
    displayedTask: {},
    visibilityFilter: 
};

// middleware for asynchronous dispatches
const middleware = [thunk];

const store = createStore(initialState, rootReducer, applyMiddleware(...middleware));

export default store;
