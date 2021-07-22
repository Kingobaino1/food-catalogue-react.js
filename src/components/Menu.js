import React from 'react';
import PropTypes from 'prop-types';
import Show from '../components/ShowPage';

const Menu = ({ image, name, clickHandler }) => {
  return (
    <>
      <div className="d-flex flex-column" onClick={() => clickHandler(name)}>
          <Show image={image} />
          <div className="w-25 mx-auto">{name}</div>
      </div>
    </>
  );
};

Menu.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default Menu;
