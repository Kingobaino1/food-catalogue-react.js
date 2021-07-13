import { createStore } from 'react';
import foodReducer from './reducers/food';

const store = createStore(foodReducer);

export default store;
