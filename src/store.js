import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import foodReducer from './reducers/food';
import categoryReducer from './reducers/category';

const reducers = combineReducers({
  foodReducer,
  categoryReducer
})
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
