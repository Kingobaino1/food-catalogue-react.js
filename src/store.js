import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import foodReducer from './reducers/food';
import categoryReducer from './reducers/category';
import itemReducer from './reducers/item';
import selectedItemReducer from './reducers/selectedItem';
import recipeReducer from './reducers/recipe';

const reducers = combineReducers({
  foodReducer,
  categoryReducer,
  itemReducer,
  selectedItemReducer,
  recipeReducer,
});
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
