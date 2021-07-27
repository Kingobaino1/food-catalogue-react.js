import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Food from '../components/Home';
import Nav from '../components/Nav';
import { recipe } from '../actions/index';
import Loading from '../components/Loading';

const ShowIndex = () => {
  const itemList = useSelector((state) => state.selectedItemReducer.item);
  const dispatch = useDispatch();
  const showRecipe = (name) => {
    dispatch(recipe(name));
  };
  if (itemList.length === 0) {
    return (
      <Loading />
    );
  }
  return (
    <>
      <div className="container">
        <Nav />
        <div className="row mx-auto">
          {
            itemList.map((food) => (
              <div className="col-md-4" role="presentation" key={food.idMeal} onClick={() => showRecipe(food.strMeal)} onKeyDown={() => showRecipe(food.strMeal)}>
                <Link to={`/categories/${food.strMeal}/details`}><Food name={food.strMeal} image={food.strMealThumb} /></Link>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default connect()(ShowIndex);
