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
import s from './Footer.css';
import Link from '../Link';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>

          <footer id="footer">

            <div className="section">

              <div className="container">

                <div className="row">
                  <div className="col-md-4 col-xs-6">
                    <div className="footer">
                      <h3 className="footer-title">Sobre Nosotros</h3>
                      <ul className="footer-links">
                        <li><a href="#"><i className="fa fa-map-marker"></i>FLORIDA 537 1º PISO – LOCAL 486 (GALERIA JARDIN) – C1005AAK</a></li>
                        <li><a href="#"><i className="fa fa-phone"></i>5031-0096 – 99 INTERNO 105 – 106 – 117</a></li>
                        <li><a href="#"><i className="fa fa-envelope-o"></i>linksml@linkscomputers.com.ar </a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-4 col-xs-6">
                    <div className="footer">
                      <h3 className="footer-title">Seccion</h3>
                      <ul className="footer-links">
                        <li><a href="#">Hogar</a></li>
                        <li><a href="#">Computacion</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-xs-6">

                  </div>
                  <div className="clearfix visible-xs"></div>

                  
                </div>

              </div>

            </div>

            <div id="bottom-footer" className="section">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <ul className="footer-payments">
                      <li><a href="#"><i className="fa fa-cc-visa"></i></a></li>
                      <li><a href="#"><i className="fa fa-credit-card"></i></a></li>
                      <li><a href="#"><i className="fa fa-cc-paypal"></i></a></li>
                      <li><a href="#"><i className="fa fa-cc-mastercard"></i></a></li>
                      <li><a href="#"><i className="fa fa-cc-discover"></i></a></li>
                      <li><a href="#"><i className="fa fa-cc-amex"></i></a></li>
                    </ul>
                    <span className="copyright">
                      Copyright &copy;<script>document.write(new Date().getFullYear());</script> Todos los derechos reservados | Links Computers 

                    </span>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
