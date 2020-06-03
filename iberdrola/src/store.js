import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from './reducers/appReducer';


export default function configureStore(preloadedState) {
  return createStore(
    appReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware)
  )
}