const DISPLAY_FOOD = 'DISPLAY_FOOD';

const displayFood = (food) => ({
  type: DISPLAY_FOOD,
  payload: food,
});

export default displayFood;
