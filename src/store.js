// store creation
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';
import { ALL_TASK } from './utils/filterConstants';

const initialState = {
    tasks: [],
    visibilityFilter: ALL_TASK, // default view
    searchWord: '',
};

// middleware for asynchronous dispatches
const middleware = [thunk];

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );

export default store;
