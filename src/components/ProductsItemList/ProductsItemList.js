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
import _ from 'lodash';

class ProductsItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: [], image:'', stock:''};
    //this.imagenParser = this.imagenParser.bind(this);
  }
  componentDidMount(){
    this.setState({product:this.props.item });
  }
  
  imagenParser(imagen){
    if(!_.isUndefined(imagen)){
      imagen = imagen.replace(/\\/g,'/');
      let imagenRuta = imagen.split(":");
      console.log("http://www.dreamshop.com.ar/images/"+imagenRuta[1]);
      return ("http://www.dreamshop.com.ar/images/"+imagenRuta[1])


    }else{
      return("../img/default.jpg");
    }
  }

  render() {
    return (





      
      <div className={` ${this.props.xs}  ${this.props.md}`}>
      <div className="product">
        <div className="product-img" style={{backgroundImage:`url(${this.imagenParser(this.state.product.imagen)})`}}>
          <img className="img-fluid img-rounded hidden" style={{maxHeight:"200px", maxWidth:"200px"}} src={this.imagenParser(this.state.product.imagen)} onerror={this.src="../img/default.jpg"} alt="" />
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
