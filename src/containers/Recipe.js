import React from 'react';
import { connect, useSelector } from 'react-redux';
import Nav from '../components/Nav';
import Show from '../components/ShowPage';

const Recipe = () => {
  const state = useSelector((state) => state.recipeReducer.recipe);
  return (
    <>
      <Nav />
      {
          state.map((item) => (
            <div className="container d-flex flex-column" key={item.idMeal}>
              <div className="w-25 mx-auto d-flex flex-column">
                <Show image={item.strMealThumb} />
                <h6 className="w-75 mx-auto">{item.strMeal}</h6>
              </div>
              <div className="d-flex flex-column">
                <p className="m-5 mb-0">Instructions:</p>
                <p className="m-5 mt-2">
                  {item.strInstructions}
                </p>
              </div>
            </div>
          ))
        }
    </>
  );
};

export default connect()(Recipe);
