import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import createReducer from './reducers/base';
import {syncHistory} from 'react-router-redux'
import {appHistory} from './history_config';


const reducer = createReducer();

let storeBuilder = null;

const reduxRouterMiddleware = syncHistory(appHistory);

storeBuilder = (
	applyMiddleware(
		reduxRouterMiddleware,
	)
)(createStore);


export function configureStore() {

    const store = storeBuilder(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    if(module.hot) {
        module.hot.accept('./reducers', () => {
            const createReducer = require('./reducers').default;
            store.replaceReducer(createReducer());
        });
    }
    return store;
}

export const store = configureStore();
