import { React, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { displayHome } from '../actions/index';
import CategoryIndex from '../components/IndexPage';

const FoodList = () => {
  // const state = useSelector((state) => state.itemReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayHome());
  }, [dispatch]);
  return (
    <CategoryIndex />
  );
};

export default connect()(FoodList);
