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
import s from './BreadCrumb.css';

class breadcrumb extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>

          <div id="breadcrumb" className="section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <ul className="breadcrumb-tree">
                    <li><a href="#">{this.props.ruta}</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(breadcrumb);
