import { React, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { displayHome } from '../actions/index';
import Food from '../components/Home';


const Foodlist = () => {
  const food = useSelector((state) => state.foodReducer.search);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayHome());
  }, [dispatch]);
  return (
      <div className="container">
        <div className="row mx-auto">
          {
          food.slice(0, 9).map((foo) => (
            <div className="col-md-4">
              <Food name={foo.strCategory} image={foo.strCategoryThumb} />
            </div>
            ))
          }
  
        </div>
      </div>
  )

}

export default connect()(Foodlist);
