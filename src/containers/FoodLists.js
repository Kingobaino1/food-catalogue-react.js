import { React, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { displayHome } from '../actions/index';
import CategoryIndex from './IndexPage';
import Loading from '../components/Loading';

const FoodList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.foodReducer.search);
  useEffect(() => {
    dispatch(displayHome());
  }, [dispatch]);
  if (state.length === 0) {
    return (
      <Loading />
    );
  }
  return (
    <CategoryIndex />
  );
};

export default connect()(FoodList);
