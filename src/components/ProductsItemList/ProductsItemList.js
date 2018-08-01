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
import s from './ProductsItemList.css';

class ProductsItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: [], image:'', stock:''};
    //this.state = {};

  }
  componentDidMount(){
    this.setState({product:this.props.item });
    if(!_.isUndefined(this.state.product.imagen)){ 
      this.setState({image:this.state.product.imagen });
     }else{
      this.setState({image:"../img/default.jpg" });
     }
    }

  render() {
    return (
      <div className={` ${this.props.xs}  ${this.props.md}`}>

      <div className="product">
        <div className="product-img">
          <img src={this.state.image} alt="" />
          <div className="product-label">
            <span className="new">Consultar Stock</span>
          </div>
        </div>
        <div className="product-body">
          <p className="product-category">{this.state.product.rubro}</p>
          <h3 className="product-name">
            <a href="#">{this.state.product.nombre}</a>
          </h3>
          <h4 className="product-price">${this.state.product.precio}</h4>

          <div className="product-btns">
            <button className="add-to-wishlist">
              <i className="fa fa-heart-o" />
              <span className="tooltipp">Favoritos</span>
            </button>
            <button className="add-to-compare">
              <i className="fa fa-exchange" />
              <span className="tooltipp">Comparar</span>
            </button>
            <button className="quick-view">
              <a href="product.html">
                <i className="fa fa-eye" />
              </a>
              <span className="tooltipp">Ver Detalle</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default withStyles(s)(ProductsItemList);
