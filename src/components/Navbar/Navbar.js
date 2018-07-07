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
import s from './Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>

          <nav id="navigation">
            <div className="container">
              <div id="responsive-nav">
                <ul className="main-nav nav navbar-nav">
                  <li className="active"><a href="./">Home</a></li>
                  <li><a href="#">Hogar</a></li>
                  <li><a href="#">Computacion</a></li>
                  <li><a href="./silfab"><img style={{'marginTop':'-7px'}} src="img/silfab_btn.png"></img></a></li>
                  <li><a href="#">Contactenos</a></li>

                </ul>
              </div>
            </div>
          </nav>

        </div>
      </div>
    );
  }
}

export default withStyles(s)(Navbar);
