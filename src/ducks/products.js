import fetch from 'cross-fetch';
// CONSTANTS
const FETCH_PRODUCTS_LIST = 'products/FETCH_PRODUCTS_LIST';

// ACTIONS
export function fetchproductsList() {
  return dispatch =>
    fetch('/api/products')
      .then(response => response.json())
      .then(json => dispatch(fetchproductsListSuccess(json)));
}

function fetchproductsListSuccess(json) {
  return {
    type: FETCH_PRODUCTS_LIST,
    data: json.response.docs,
  };
}

// REDUCERS

export default function reducer(state = [], action) {
  // const newState = { ...state };
  switch (action.type) {
    case FETCH_PRODUCTS_LIST:
      return action.data;
    default:
      return state;
  }
}
