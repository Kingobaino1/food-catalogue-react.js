import React from 'react';
import Food from '../components/Home';
import Nav from '../components/Nav';
import { connect, useSelector } from 'react-redux';

const ShowIndex = () => {
  const itemList = useSelector((state) => state.selectedItemReducer.item);
  return (
    <>
      <div className="container">
        <Nav />
        <div className="row mx-auto">
          {
            itemList.map((food) => (
              <div className="col-md-4">
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
