import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { middlewares } from './middlewares';
import { garagesReducer } from './garages';

const appReducers = combineReducers({
  garages: garagesReducer,
});
const appStore = createStore(appReducers, composeWithDevTools(applyMiddleware(...middlewares)));

export { appStore };
