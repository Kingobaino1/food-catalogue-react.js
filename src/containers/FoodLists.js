import { React, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { displayHome } from '../actions/index';
import Food from '../components/Home';
import Header from '../containers/Header'


const Foodlist = () => {
  const food = useSelector((state) => state.foodReducer.search);
  const category = useSelector((state) => state.itemReducer);
  const itemList = useSelector((state) => state.selectedItemReducer.item);
  console.log(itemList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayHome());
  }, [dispatch]);
  if(category === 'All') {
    return (
      <div className="container">
        <Header />
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
  return (
    <div className="container">
      <Header />
      <div className="row mx-auto">
       {
       itemList.map((foo) => (
         <div className="col-md-4">
           <Food name={foo.strMeal} image={foo.strMealThumb} />
         </div>
         ))
       }

      </div>
    </div>
  )
}

export default connect()(Foodlist);
