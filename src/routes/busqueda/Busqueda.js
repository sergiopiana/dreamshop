import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Busqueda.css';
import BreadCrumb from '../../components/BreadCrumb';
import BusquedaProducts from '../../containers/busquedaProducts';

class Busqueda extends React.Component {
  

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <BreadCrumb ruta={"Home / Resultados"}/>
          <BusquedaProducts />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Busqueda);
