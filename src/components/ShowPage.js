import React from 'react';
import PropTypes from 'prop-types';

const Show = ({ image }) => {
  return (
    <>
      <div>
      <img className="image" src={image} alt="food"></img> 
      </div>
    </>
  )
}

Show.propTypes = {
  image: PropTypes.string,
}
export default Show;
