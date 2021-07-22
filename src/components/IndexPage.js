import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Menu from './Menu';
import Header from '../containers/Header';
import { selectedCategory } from '../actions/index';

const CategoryIndex = () => {
  const food = useSelector((state) => state.foodReducer.search);
  const dispatch = useDispatch();

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
              <Menu
                name={food.strCategory}
                image={food.strCategoryThumb}
                clickHandler={clickHandler}
              />
            </div>
          ))
          }
          ;
        </div>
      </div>
    </>
  );
};

export default CategoryIndex;
