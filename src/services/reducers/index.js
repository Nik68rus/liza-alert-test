import {combineReducers} from 'redux';
import { appReducer } from './app';
import { itemsReducer } from './items';

export const rootReducer = combineReducers({
  items: itemsReducer,
  app: appReducer,
})