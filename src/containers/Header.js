import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryFilter from '../components/CategoryFilter';
import { displayCategories, item, selectedCategory  } from '../actions/index';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ items }) => {
  const state = useSelector((state) => state.categoryReducer.category);
  const category = useSelector((state) => state.itemReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayCategories());
  }, [dispatch]);
  const handleFilterChange = (category) => {
    dispatch(item(category));
    dispatch(selectedCategory(category));
  };
  const newCat = ['All', ...state];
  
  return (
    <div className="underline">
      <div className="d-flex justify-content-between container">
        <div className="d-flex justify-content-between">
          <div className="mt-4 ml-4"><h1 className="text-blue">MAJ Kitchen</h1></div>
          <div className="m-4 pt-3 mb-0">
            <h6>{items}</h6>
          </div>
          <div className="m-4 pt-3 mb-0">
            <Link to={`/categories/${category}`}>
            <h6>
              <CategoryFilter
                value={newCat.map((item) => item)}
                handleFilterChange={handleFilterChange}
              /> 
            </h6> 
            </Link>
          </div>
        </div>
        <div>
          <i className="fas fa-user m-4 pt-3 mb-0 text-blue" />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  items: PropTypes.string,
}

export default Header;
