import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Computacion.css';
import BreadCrumb from '../../components/BreadCrumb';
import ComputacionProducts from '../../containers/computacionProducts';

class Computacion extends React.Component {
  

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <BreadCrumb />
          <ComputacionProducts />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Computacion);
