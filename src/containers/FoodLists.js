import { React, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { displayHome } from '../actions/index';
import CategoryIndex from './IndexPage';

const FoodList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayHome());
  }, [dispatch]);
  return (
    <CategoryIndex />
  );
};

export default connect()(FoodList);
