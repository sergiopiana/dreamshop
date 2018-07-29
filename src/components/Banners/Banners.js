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
          <div id="myCarousel" className="carousel slide">
            <ol className="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#myCarousel" data-slide-to="1" />
            </ol>
            <div className="carousel-inner">
              <div className="active item">
                <img src="img/banner1.png" />
              </div>
              <div className="item">
                <img src="img/banner2.png" />
              </div>
            </div>
            <a
              className="carousel-control left"
              href="#myCarousel"
              data-slide="prev"
            >
              &lsaquo;
            </a>
            <a
              className="carousel-control right"
              href="#myCarousel"
              data-slide="next"
            >
              &rsaquo;
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
                  <img src="img/shop_hogar.png" alt="" />
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
