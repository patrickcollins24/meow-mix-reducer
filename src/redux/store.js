import { createStore } from 'redux';
import { cat } from './reducers';

const initialState = {
    name: 'Olivia',
    activity: 'scheming on how to kill the owners while still being fed everyday.',
};

export const store = createStore(
    cat,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);