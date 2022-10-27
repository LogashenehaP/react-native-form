import {combineReducers} from 'redux';
import { operationsReducer } from './reducers';
export const rootReducer=combineReducers({operationsReducer})