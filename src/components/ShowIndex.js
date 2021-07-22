import React from 'react';
import { connect, useSelector } from 'react-redux';
import Food from './Home';
import Nav from './Nav';

const ShowIndex = () => {
  const itemList = useSelector((state) => state.selectedItemReducer.item);
  return (
    <>
      <div className="container">
        <Nav />
        <div className="row mx-auto">
          {
            itemList.map((food) => (
              <div className="col-md-4" key="{food.strMeal}">
                <Food name={food.strMeal} image={food.strMealThumb} />
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default connect()(ShowIndex);
