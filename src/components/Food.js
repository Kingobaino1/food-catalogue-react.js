import React from 'react';
import PropTypes from 'prop-types';

const Food = (foodie) => {
  return (
    <>
      <div>{foodie.strInstructions}</div>
      <div>{foodie.strMeal}</div>
    </>
  )
}

Food.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  foodie: PropTypes.object.isRequired,
};

export default Food;
