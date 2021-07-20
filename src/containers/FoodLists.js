import { React, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import displayCategories from '../actions/index';


const Foodlist = () => {
  const food = useSelector((state) => state.search);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayCategories());
  }, [dispatch]);
  return (
      <div className="container">
        <ul>
          {/* {food.map((foo) => <li>{foo}</li>)} */}
          {
             console.log(food, 'okay')
          }
         
        </ul>
        
      </div>
  )

}

export default connect()(Foodlist);
