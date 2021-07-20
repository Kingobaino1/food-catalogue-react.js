// import defaultMenu from '../js/foodApi';
const defaultMenu = {
  error: null,
  search: ['Beef', 'Vegan'],
}

const foodReducer = (state = defaultMenu, action) => {
  switch (action.type) {
    case 'REQUEST_DATA':
      return {...state, error: defaultMenu.error}
    case 'SEARCH':
      return {...state, search: action.payload}
    case 'ERROR':
      return {...state, error: action.error}
    default:
      return state;
  }

}

export default foodReducer;
