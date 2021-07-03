import { combineReducers } from 'redux';
import Quiz1Reducer from './Quiz1Reducer';
import Quiz2Reducer from './Quiz2Reducer';

const combinedReducers = combineReducers({ Quiz1Reducer, Quiz2Reducer });
export default combinedReducers;
