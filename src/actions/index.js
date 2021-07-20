const ERROR = 'ERROR';

const displayCategories = () => {
  return (dispatch) => {
        return fetch('https://themealdb.com/api/json/v1/1/search.php?s', {
           mode: 'cors',
        })
            .then(response => response.json())
            .then(json => dispatch(
                { type: 'SEARCH', payload: json.meals.map((cat) => cat) }))
            .catch(err => dispatch(
                { type: ERROR, error: "Unable to fetch data" }))
    }
}



export default displayCategories;
