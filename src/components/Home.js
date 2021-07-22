import React from 'react';
import PropTypes from 'prop-types';
import Show from './ShowPage';

const Food = ({ image, name }) => (
  <>
    <div className="d-flex flex-column">
      <Show image={image} />
      <div className="w-100 mx-auto">{name}</div>
    </div>
  </>
);

Food.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Food;
