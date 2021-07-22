import React from 'react';
import PropTypes from 'prop-types';

const Show = ({ image }) => (
  <>
    <div>
      <img className="image" src={image} alt="food" />
    </div>
  </>
);

Show.propTypes = {
  image: PropTypes.string.isRequired,
};
export default Show;
