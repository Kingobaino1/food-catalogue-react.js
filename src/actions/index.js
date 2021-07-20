const ERROR = 'ERROR';

const displayCategories = () => {
  return (dispatch) => {
        return fetch('https://themealdb.com/api/json/v1/1/list.php?c=list', {
           mode: 'cors',
        })
            .then(response => response.json())
            .then(json => dispatch(
                { type: 'SEARCH', payload: json.meals.map((cat) => cat.strCategory) }))
            .catch(err => dispatch(
                { type: ERROR, error: "Unable to fetch data" }))
    }
}



export default displayCategories;
