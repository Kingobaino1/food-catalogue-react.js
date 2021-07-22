import React from 'react';
import Menu from '../components/Menu';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../containers/Header';
import { selectedCategory } from '../actions/index';
import PropTypes from 'prop-types';

const CategoryIndex = ({ category }) => {
  const food = useSelector((state) => state.foodReducer.search);
  const dispatch = useDispatch();
  category = useSelector((state) => state.itemReducer);

  const clickHandler = (category) => {
   dispatch(selectedCategory(category));
  };

  return (
    <>
      <div className="container">
        <Header items="categories" />
        <div className="row mx-auto">
          {
          food.slice(0, 12).map((food) => (
            <div className="col-md-4" key="{food.strCategoryThumb}">
              <Menu name={food.strCategory} image={food.strCategoryThumb} clickHandler={clickHandler} />
            </div>
            ))
          };
        </div>
      </div>
    </>
  );
};

CategoryIndex.propTypes = {
  category: PropTypes.string,
};

export default CategoryIndex;
