import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import Banners from '../../components/Banners';
import Homeproducts from '../../containers/homeProducts';

class Home extends React.Component {
  

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Banners />
          <Homeproducts />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
