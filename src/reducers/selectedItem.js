const initialState = {
  item: [],
};

const selectedItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECTED_ITEM':
      return { ...state, item: action.payload };
    default:
      return state;
  }
};

export default selectedItemReducer;
