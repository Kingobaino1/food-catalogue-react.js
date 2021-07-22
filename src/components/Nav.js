import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ items }) => {
  const class1 = 'nav-item';
  return (
    <>
      <div className="d-flex justify-content-between">
        <ul className="d-none d-md-block m-4">
          <h1 className="text-dark font-weight-bold">Maj Kitchen</h1>
        </ul>
        <ul className="d-none d-md-block m-4">
          <h5 className="text-blue mt-3 font-weight-bold">{items} Menu</h5>
        </ul>
        <ul className="nav m-4">
          <li className={class1}>
            <Link to="/" className="nav-link active mt-3 text-dark font-weight-bold">Home</Link>
          </li>
          <li className={class1}>
            <i className="fas fa-user nav-link mt-3 text-blue" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
