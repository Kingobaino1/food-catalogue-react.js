const defaultMenu = {
  error: null,
  category: [],
}

const categoryReducer = (state = defaultMenu, action) => {
  switch (action.type) {
    case 'CATEGORY':
      return {...state, category: action.payload};
    case 'ERROR':
      return {...state, error: action.error};
    default:
      return state;
  };
};

export default categoryReducer;
