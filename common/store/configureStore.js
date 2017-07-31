import { createStore, applyMiddleware,combineReducers } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { routerReducer } from 'react-router-redux';

const configureStore = () => {
  var preloadedState = arguments[0] ? arguments[0] : {};
  const middlewares = [ thunk ];
  const store = createStore(
    combineReducers(
      ...rootReducer,
    {
      routing: routerReducer
    }),
    preloadedState,
    applyMiddleware(...middlewares)
  )


  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
