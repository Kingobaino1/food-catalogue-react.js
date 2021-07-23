import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import * as Actions from '../actions/index';

const mockStore = configureStore([thunk]);

let initialDataState = {
  search: [],
  error: null,
  category: [],
  item: [],
  data: 'All',
};

describe('should retrieve data and insert on the data state', () => {
  let store;
  beforeEach(() => {
    store = mockStore(initialDataState);
  });

  afterEach(() => {
    initialDataState = {
      search: [],
      error: null,
      category: [],
      item: [],
      data: 'All',
    };
  });

  it('should successfully retrieve searched categoris', () => (
    store.dispatch(Actions.displayHome())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual('SEARCH');
      })
      .catch((err) => err)
  ));

  it('should successfully retrieve categories', () => (
    store.dispatch(Actions.displayCategories())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual('Category');
      })
      .catch((err) => err)
  ));

  it('should successfully retrieve selectedCategory', () => (
    store.dispatch(Actions.selectedCategory('Beef'))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual('SELECTED_ITEM');
      })
      .catch((err) => err)
  ));

  it('should successfully retrieve item', () => (
    expect(Actions.item('Beef').type).toEqual('ITEM')
  ));
});
