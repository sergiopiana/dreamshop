/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Cattree.css';
import _ from 'lodash';

class Cattree extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories:this.props.catlist };

  }
  componentDidMount(){

      console.log("asdad"+this.state.catlist );
  }
  

  render() {
    return (
    <div>  

    </div>
    );
  }
}

export default withStyles(s)(Cattree);
