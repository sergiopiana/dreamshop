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
import { connect } from 'react-redux';

import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import * as busquedaActions from '../../ducks/busqueda';
import MessengerCustomerChat from 'react-messenger-customer-chat';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  onDataSubmit() {
    let value = $('#valueFind').val();
    this.props.fetchBusqueda(value);
  }


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
                      <i className="fa fa-phone" /><i className="fa fa-whatsapp" /> 11.3893.7091
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope-o" />{' '}
                      ventaslocal@dreamshop.com.ar{' '}
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
                <div className="col-sm-12 d-block d-md-none">
                    <div className="header-logo">
                      <a href="#" className="logo">
                        <img
                          height="120px"
                          
                          src="./img/logoDream.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-5 d-none d-md-block">
                    <div className="header-logo">
                      <a href="#" className="logo">
                        <img
                          height="120px"
                          style={{
                            position: 'absolute',
                            marginTop: ' -28px',
                            marginLeft: '-29px',
                          }}
                          src="./img/logo.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>

                  <div className="col-md-6 col-12" style={{paddingLeft:'0', paddingRight:'0'}}>
                    <div className="header-search" style={{textAlign:'center'}}>
                      <form>
                        
                        <input
                        style={{borderRadius:"40px 0 0 40px", height:"39px"}}
                          name="busquedaValue"
                          id="valueFind"
                          className="input"
                          placeholder="Buscar"
                        />
                        <Link to={{pathname:'/busqueda', state: { valor: this.busquedaValue} }}><button onClick={() => this.onDataSubmit()} className="search-btn">Buscar</button></Link>
                      </form>
                    </div>
                  </div>

                  <div className="col-md-3 clearfix d-none">
                    <div className="header-ctn">
                      <div>
                        <a href="#">
                          <i className="fa fa-heart-o" />
                          <span>Favoritos</span>
                          <div className="qty">2</div>
                        </a>
                      </div>

                      <div className="dropdown d-none">
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
            {/* <MessengerCustomerChat
              pageId="470449566709286"
              appId="220571191870067"
            />           */}
          </header>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  busqueda: state.busqueda,
});

export default connect(mapStateToProps, busquedaActions)(
  withStyles(s)(Header),
);

