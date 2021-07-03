import { createStore } from 'redux';
import combinedReducers from './reducers/CombinedReducers';

const store = createStore(combinedReducers);

export default store;
