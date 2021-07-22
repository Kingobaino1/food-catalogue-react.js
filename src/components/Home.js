import React from 'react';
import PropTypes from 'prop-types';
import Show from '../components/ShowPage';

const Food = ({ image, name }) => {
  return (
    <>
      <div className="d-flex flex-column">
          <Show image={image} />
          <div className="w-100 mx-auto">{name}</div>
      </div>
    </>
  );
};

Food.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

export default Food;
