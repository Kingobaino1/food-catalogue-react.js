import { React, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { displayHome } from '../actions/index';
import CategoryIndex from '../components/IndexPage';

const Foodlist = () => {
  const state = useSelector((state) => state.itemReducer);
  console.log(state,'hey')
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayHome());
  }, [dispatch]);
    return (
      <CategoryIndex category={state} />
    );
};

export default connect()(Foodlist);
