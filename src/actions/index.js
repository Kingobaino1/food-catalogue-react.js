const ERROR = 'ERROR';

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
    }
}

