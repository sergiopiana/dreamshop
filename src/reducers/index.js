import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import products from '../ducks/products';
import busqueda from '../ducks/busqueda';


export default combineReducers({
  user,
  runtime,
  products,
  busqueda,
});
