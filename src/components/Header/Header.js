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
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <header>
            <div id="top-header">
              <div className="container">
                <ul className="header-links pull-right">
                  <li>
                    <a href="#">
                      <i className="fa fa-phone" /> 11.3893.7091
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope-o" />{' '}
                      linksml@linkscomputers.com.ar{' '}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-map-marker" /> FLORIDA 537 1º PISO –
                      LOCAL 486 (GALERIA JARDIN) – C1005AAK
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div id="header">
              <div className="container">
                <div className="row">
                  <div className="col-md-5 hidden-xs">
                    <div className="header-logo">
                      <a href="#" className="logo">
                        <img
                          height="120px"
                          style={{
                            position: 'absolute',
                            marginTop: ' -39px',
                            marginLeft: '-29px',
                          }}
                          src="./img/logo.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="header-search">
                      <form>
                        <select className="input-select">
                          <option value="0">Seccion</option>
                          <option value="1">Hogar</option>
                          <option value="1">Computacion</option>
                        </select>
                        <input className="input" placeholder="Buscar" />
                        <button className="search-btn">Buscar</button>
                      </form>
                    </div>
                  </div>

                  <div className="col-md-3 clearfix hidden">
                    <div className="header-ctn">
                      <div>
                        <a href="#">
                          <i className="fa fa-heart-o" />
                          <span>Favoritos</span>
                          <div className="qty">2</div>
                        </a>
                      </div>

                      <div className="dropdown hidden">
                        <a
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          aria-expanded="true"
                        >
                          <i className="fa fa-shopping-cart" />
                          <span>Carrito</span>
                          <div className="qty">3</div>
                        </a>
                        <div className="cart-dropdown">
                          <div className="cart-list">
                            <div className="product-widget">
                              <div className="product-img">
                                <img src="./img/product01.png" alt="" />
                              </div>
                              <div className="product-body">
                                <h3 className="product-name">
                                  <a href="#">Tablet 7"</a>
                                </h3>
                                <h4 className="product-price">
                                  <span className="qty">1x</span>$2980.00
                                </h4>
                              </div>
                              <button className="delete">
                                <i className="fa fa-close" />
                              </button>
                            </div>

                            <div className="product-widget">
                              <div className="product-img">
                                <img src="./img/product02.png" alt="" />
                              </div>
                              <div className="product-body">
                                <h3 className="product-name">
                                  <a href="#">product name goes here</a>
                                </h3>
                                <h4 className="product-price">
                                  <span className="qty">3x</span>$980.00
                                </h4>
                              </div>
                              <button className="delete">
                                <i className="fa fa-close" />
                              </button>
                            </div>
                          </div>
                          <div className="cart-summary">
                            <small>3 Item(s) selected</small>
                            <h5>SUBTOTAL: $2940.00</h5>
                          </div>
                          <div className="cart-btns">
                            <a href="#">View Cart</a>
                            <a href="#">
                              Checkout{' '}
                              <i className="fa fa-arrow-circle-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="menu-toggle">
                        <a href="#">
                          <i className="fa fa-bars" />
                          <span>Menu</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
