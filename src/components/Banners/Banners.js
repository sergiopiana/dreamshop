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
import s from './Banners.css';

class Banners extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">  
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="img/banner1.png" alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="img/banner2.png" alt="Second  slide"/>
              </div>
            </div>  
              <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
          </div>
          <div className="row">
            <div className="col-md-4 col-xs-4">
              <div
                className="shop"
                style={{ maxHeight: ' 200px', zIndex: '0' }}
              >
                <div className="shop-img">
                  <img src="img/shop01.png" alt="" />
                </div>
                <div className="shop-body">
                  <h3>
                    Computacion<br />
                  </h3>
                  <a href="#" className="cta-btn">
                    Ver Productos <i className="fa fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-xs-4">
              <div className="shop" style={{ maxHeight: '200px', zIndex: '0' }}>
                <div className="shop-img">
                  <img src="img/shop_hogar.png" alt="" />
                </div>
                <div className="shop-body">
                  <h3>
                    Hogar<br />
                  </h3>
                  <a href="#" className="cta-btn">
                    Ver Productos <i className="fa fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xs-4">
              <div
                className="shopB"
                style={{ maxHeight: '200px', zIndex: '0' }}
              >
                <div className="shop-img">
                  <img src="img/balanza_silfab.jpg" alt="" />
                </div>
                <div className="shop-body">
                  <h3>
                    Silfab<br />
                  </h3>
                  <a href="/silfab" className="cta-btn">
                    Ver Productos <i className="fa fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Banners);
