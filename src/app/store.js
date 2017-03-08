import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { createTokenApiMiddleware } from 'redux-token-api-middleware';
import rootReducer from './reducers';
import initialState from './state';

const routingMiddleware = routerMiddleware(hashHistory);
const tokenApiMiddleware = createTokenApiMiddleware();
const sagaMiddleware = createSagaMiddleware();

let middlewares = [
  thunkMiddleware,
  routingMiddleware,
  sagaMiddleware,
  tokenApiMiddleware
]

if (DEBUG) {
  const loggerMiddleware = createLogger({
    stateTransformer: (state) => {
      return state.asMutable({deep: true});
    }
  });
  middlewares.push(loggerMiddleware);
}

let enhancers = [
  applyMiddleware(...middlewares)
]

if (DEBUG) {
  enhancers.push(window.devToolsExtension ? window.devToolsExtension() : f => f)
}

const finalCreateStore = compose(...enhancers)(createStore);

const store = finalCreateStore(rootReducer, initialState);

export default store;