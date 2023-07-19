import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk'
import monitorReducersEnhancer from '../redux/middleware/thunk/monitorReducers'
import loggerMiddleware from '../redux/middleware/thunk/logger'
import rootReducer from '../redux/reducer/All'
export default function configureStore() {
  const middlewares = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composedEnhancers = compose(...enhancers)
  const store = createStore(rootReducer, composedEnhancers)
  return store;
}