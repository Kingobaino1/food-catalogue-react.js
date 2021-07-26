const ERROR = 'ERROR';
const ITEM = 'ITEM';

const displayHome = () => (dispatch) => fetch('https://themealdb.com/api/json/v1/1/categories.php?', {
  mode: 'cors',
})
  .then((response) => response.json())
  .then((json) => dispatch(
    { type: 'SEARCH', payload: json.categories.map((cat) => cat) },
  ))
  .catch((err) => dispatch(
    { type: ERROR, error: err },
  ));

const displayCategories = () => (dispatch) => fetch('https://themealdb.com/api/json/v1/1/list.php?c=list', {
  mode: 'cors',
})
  .then((response) => response.json())
  .then((json) => dispatch(
    { type: 'CATEGORY', payload: json.meals.map((cat) => cat.strCategory) },
  ))
  .catch((err) => dispatch(
    { type: ERROR, error: err },
  ));

const selectedCategory = (category) => (dispatch) => fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`, {
  mode: 'cors',
})
  .then((response) => response.json())
  .then((json) => dispatch(
    { type: 'SELECTED_ITEM', payload: json.meals.map((item) => item) },
  ))
  .catch((err) => dispatch(
    { type: ERROR, error: err },
  ));

const recipe = (name) => (dispatch) => fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${name}`, {
  mode: 'cors',
})
  .then((response) => response.json())
  .then((json) => dispatch(
    { type: 'RECIPE', payload: json.meals.map((meal) => meal) },
  ))
  .catch((err) => dispatch(
    { type: ERROR, error: err },
  ));

const item = (data) => ({
  type: ITEM,
  payload: data,
});

export {
  displayHome,
  displayCategories,
  selectedCategory,
  item,
  recipe,
};
