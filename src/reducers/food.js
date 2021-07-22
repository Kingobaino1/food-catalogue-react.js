const defaultMenu = {
  error: null,
  search: [],
};

const foodReducer = (state = defaultMenu, action) => {
  switch (action.type) {
    case 'SEARCH':
      return { ...state, search: action.payload };
    case 'ERROR':
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default foodReducer;
