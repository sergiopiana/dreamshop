import fetch from 'cross-fetch';
// CONSTANTS
const FETCH_BUSQUEDA_LIST = 'products/FETCH_BUSQUEDA_LIST';
const FETCH_DATOBUSQUEDA_LIST = 'products/FETCH_DATOBUSQUEDA_LIST';
// ACTIONS

export function fetchBusqueda(value) {
  return {
    type: FETCH_BUSQUEDA_LIST,
    data: value,
  };
}
export function fetchMostrar() {
  return {
    type: FETCH_DATOBUSQUEDA_LIST,
  };
}
// REDUCERS

export default function reducer(state = [], action) {
  // const newState = { ...state };
  switch (action.type) {
    case FETCH_BUSQUEDA_LIST:
      return action.data;
    case FETCH_DATOBUSQUEDA_LIST:
      return state;      
    default:
      return state;
  }
}
