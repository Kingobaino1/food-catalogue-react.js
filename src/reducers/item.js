const itemReducer = (state = 'All', action) => {
  switch (action.type) {
    case 'ITEM':
      return action.payload;
    default:
      return state;
  };
};

export default itemReducer;
