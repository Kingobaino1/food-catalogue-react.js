const ERROR = 'ERROR';
const ITEM = 'ITEM';

export const displayHome = () => {
  return (dispatch) => {
        return fetch('https://themealdb.com/api/json/v1/1/categories.php?', {
           mode: 'cors',
        })
            .then(response => response.json())
            .then(json => dispatch(
                { type: 'SEARCH', payload: json.categories.map((cat) => cat) }))
            .catch(err => dispatch(
                { type: ERROR, error: "Unable to fetch data" }))
    }
}

export const displayCategories = () => {
  return (dispatch) => {
        return fetch('https://themealdb.com/api/json/v1/1/list.php?c=list', {
           mode: 'cors',
        })
            .then(response => response.json())
            .then(json => dispatch(
                { type: 'CATEGORY', payload: json.meals.map((cat) => cat.strCategory) }))
            .catch(err => dispatch(
                { type: ERROR, error: "Unable to fetch data" }))
    };
};

export const selectedCategory = (category) => {
  return (dispatch) => {
        return fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`, {
           mode: 'cors',
        })
            .then(response => response.json())
            .then(json => dispatch(
                { type: 'SELECTED_ITEM', payload: json.meals.map((item) => item) }))
            .catch(err => dispatch(
                { type: ERROR, err: "Unable to fetch data" }))
    };
};

export const item = (data) => {
    return {
        type: ITEM,
        payload: data,
    };
};
