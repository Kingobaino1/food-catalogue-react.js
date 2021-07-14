import { createStore } from 'redux';
import foodReducer from './reducers/food';

const store = createStore(foodReducer);

export default store;
