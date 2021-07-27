const initialState = {
  recipe: [],
  error: null,
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RECIPE':
      return { ...state, recipe: action.payload };
    default:
      return state;
  }
};

export default recipeReducer;
