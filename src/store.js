// store creation
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';

const initialState = {
    tasks: [],
    displayedTask: {
        id: 1,
        name: 'Placeholder Task',
        start: '2020-12-30',
        due: '2021-01-25',
        priority: 3,
        description: 'due soon!',
    },
    visibilityFilter: ''
};

// middleware for asynchronous dispatches
const middleware = [thunk];

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );

export default store;
