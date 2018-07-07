import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Silfab.css';
import BreadCrumb from '../../components/BreadCrumb';
import SilfabProducts from '../../containers/silfabProducts';

class Silfab extends React.Component {
  

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <BreadCrumb />
          <SilfabProducts />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Silfab);
