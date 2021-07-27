import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

const CategoryFilter = ({ handleFilterChange }) => {
  const state = useSelector((state) => state.categoryReducer.category);
  const newCat = ['All', ...state];

  return (
    <label htmlFor="categories" className="d-flex justify-content-between">
      <div className="">
        <select id="filter" onChange={(e) => handleFilterChange(e.target.value)}>
          {newCat.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>
      </div>
    </label>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
