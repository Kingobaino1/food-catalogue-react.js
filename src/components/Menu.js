import React from 'react';
import PropTypes from 'prop-types';
import Show from '../components/ShowPage';
import { Link } from 'react-router-dom';

const Menu = ({ image, name, clickHandler }) => {
  return (
    <>
      <div className="d-flex flex-column" onClick={() => clickHandler(name)}>
          <Link to={`/categories/${name}`}><Show image={image} /></Link>
          <div className="w-25 mx-auto"><h6 className="text">{name}</h6></div>
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
