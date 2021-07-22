import React from 'react';
import Food from '../components/Home';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../containers/Header';


const CategoryIndex = () => {
  const food = useSelector((state) => state.foodReducer.search);
  return (
    <>
      <div className="container">
        <Header items="categories" />
        <div className="row mx-auto">
          {
          food.slice(0, 12).map((food) => (
            <div className="col-md-4">
              <Food name={food.strCategory} image={food.strCategoryThumb} />
            </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

CategoryIndex.propTypes = {
  item: PropTypes.array,
};

export default CategoryIndex;
