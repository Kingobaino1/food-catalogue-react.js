import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import foodReducer from './reducers/food';

const store = createStore(foodReducer, applyMiddleware(thunk));

export default store;
