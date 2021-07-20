import { React, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import CategoryFilter from './CategoryFilter';
import { displayCategories } from '../actions/index';


const Header = () => {
  const state = useSelector((state) => state.categoryReducer.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayCategories())
  }, [dispatch]);;
  const handleFilterChange = (category) => {
    // dispatch(changeFilter(category));
    console.log('Hello world');
  };
  return (
    <div className="underline">
      <div className="d-flex justify-content-between container">
        <div className="d-flex justify-content-between">
          <div className="mt-4 ml-4"><h1 className="text-blue">MEALDB</h1></div>
          <div className="m-4 pt-3 mb-0">
            <h6>Categories</h6>
          </div>
          <div className="m-4 pt-3 mb-0">
            <h6>
              <CategoryFilter state={state}
                value={state.map((item) => item.category)}
                handleFilterChange={handleFilterChange}
              />
            </h6>
          </div>
        </div>
        <div>
          <i className="fas fa-user m-4 pt-3 mb-0 text-blue" />
        </div>
      </div>
    </div>
  );
};

export default connect()(Header);
