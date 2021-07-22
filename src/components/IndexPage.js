import React from 'react';
import Menu from '../components/Menu';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../containers/Header';
import { Link } from 'react-router-dom';
import { item, selectedCategory } from '../actions/index';
import PropTypes from 'prop-types';

const CategoryIndex = ({ category }) => {
  const food = useSelector((state) => state.foodReducer.search);
  const dispatch = useDispatch()
  category = useSelector((state) => state.itemReducer);

  const clickHandler = (category) => {
   dispatch(selectedCategory(category));
   console.log(dispatch(item(category)));
  };

  return (
    <>
      <div className="container">
        <Header items="categories" />
        <div className="row mx-auto">
          {
          food.slice(0, 12).map((food) => (
            <div className="col-md-4" key="{food.strCategoryThumb}">
              <Link to={`/categories/${food.strCategory}`}><Menu name={food.strCategory} image={food.strCategoryThumb} clickHandler={clickHandler} /></Link> 
            </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

CategoryIndex.propTypes = {
  category: PropTypes.string,
}

export default CategoryIndex;
