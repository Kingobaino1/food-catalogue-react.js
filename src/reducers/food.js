const defaultFood = [
  {
    idMeal: "52977", strMeal: 'Corba', strArea: 'Turkish', strInstructions: 'Hello world'
  },
  {
    idMeal: "52978", strMeal: 'Kili', strArea: 'Nigeria', strInstructions: 'Hello world!'
  }
];

const foodReducer = (state = defaultFood, action) => {
  switch (action.type) {
    case 'DISPLAY_FOOD':
      return [...state, action.payload]
    default:
      return state;
  }

}

export default foodReducer;
