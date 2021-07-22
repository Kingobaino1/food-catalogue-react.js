import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Show from './ShowPage';

const Menu = ({ image, name, clickHandler }) => (
  <>
    <div className="d-flex flex-column" role="presentation" onClick={() => clickHandler(name)} onKeyDown={() => clickHandler(name)}>
      <Link to={`/categories/${name}`}><Show image={image} /></Link>
      <div className="w-25 mx-auto"><h6 className="text">{name}</h6></div>
    </div>
  </>
);

Menu.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Menu;
