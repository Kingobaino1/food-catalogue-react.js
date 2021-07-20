import React from 'react';
import PropTypes from 'prop-types';

const Food = ({ image, name }) => {
  return (
    <>
      <div className="d-flex flex-column">
        <img className="image" src={image} alt="food"></img>
        <div>{name}</div>
      </div>
    </>
  )
}

Food.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string
};

export default Food;
