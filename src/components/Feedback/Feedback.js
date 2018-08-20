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
import s from './Feedback.css';

class Feedback extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div id="newsletter" className="section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="newsletter">
                    <p>Deseo recibir <strong>NOVEDADES</strong></p>
                    <form style={{fontSize:"15px"}}>
                      <input className="input" type="email" placeholder="Ingrese su mail"/>
                      <button className="newsletter-btn"><i className="fa fa-envelope"></i> Suscribirse</button>
                    </form>
                    <ul className="newsletter-follow">
                      <li>
                        <a href="https://www.facebook.com/linkscomputers.com.ar/"><i className="fa fa-facebook"></i></a>
                      </li>

                      <li>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Feedback);
