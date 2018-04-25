import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import celebs from './celebs';

const reducer = combineReducers({celebs});

const isProduction = process.env.NODE_ENV === 'production';

const middleware = isProduction ? composeWithDevTools(applyMiddleware(thunkMiddleware))
: composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({collapsed: true})));

const store = createStore(reducer, middleware);

export default store;
export * from './celebs';
