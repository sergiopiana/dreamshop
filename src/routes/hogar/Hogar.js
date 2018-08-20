import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Hogar.css';
import BreadCrumb from '../../components/BreadCrumb';
import HogarProducts from '../../containers/hogarProducts';

class Hogar extends React.Component {
  

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <BreadCrumb ruta={"Home / Hogar"}/>
          <HogarProducts />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Hogar);
