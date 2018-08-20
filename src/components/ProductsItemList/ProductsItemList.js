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
    if(_.isUndefined(imagen) || (imagen == '')){

      return("../img/default.jpg");     
    }else{
      //console.log(imagen);
      imagen = imagen.replace(/\\/g,'/');
      let imagenRuta = imagen.split(":");
     // console.log("http://www.dreamshop.com.ar/images/"+imagenRuta[1]);
      return ("http://www.dreamshop.com.ar/images/"+imagenRuta[1])
    }
  }

  render() {
    return (
    <div>  
  
      <div className="modal fade" id={this.state.product.id} role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">{this.state.product.nombre}</h4>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <img className="img-fluid img-rounded" style={{maxHeight:"500px", maxWidth:"500px"}} src={this.imagenParser(this.state.product.imagen)}  alt="" />
                </div>
                <div className="col-md-6">
                  <div className="panel panel-default" style={{fontSize:"12px"}}>
                    <div className="panel-heading">RUBRO</div>
                    <div className="panel-body">
                      <p><b>{this.state.product.rubro}</b></p>
                    </div>
                  </div>  
                  <div className="panel panel-default" style={{fontSize:"12px"}}>
                    <div className="panel-heading">DESCRIPCION</div>
                    <div className="panel-body">
                      <p style={{textAlign:'justify'}}>{this.state.product.descripcion}</p>
                    </div>
                  </div>                    
                  <div className="panel panel-default" style={{fontSize:"12px"}}>
                    <div className="panel-heading" style={{fontSize:"16px"}}>PRECIO</div>
                    <div className="panel-body">
                      <h4 style={{color:"#d10024"}}>${this.state.product.precio}</h4>
                    </div>
                  </div>                                   
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>

      
      <div className={` ${this.props.xs}  ${this.props.md}`}>


        <div className="product">
          <div className="product-img" style={{backgroundImage:`url(${this.imagenParser(this.state.product.imagen)})`}}>
            <img className="img-fluid img-rounded hidden" style={{maxHeight:"200px", maxWidth:"200px"}} src={this.imagenParser(this.state.product.imagen)}  alt="" />
            <div className="product-label">
              <span className="new hidden">Consultar Stock</span>
            </div>
          </div>
          <div className="product-body">
            <p className="product-category">{this.state.product.rubro}</p>
            <h3 className="product-name">
              <a data-target={`#${this.state.product.id}`} role="button" data-toggle="modal">{this.state.product.nombre}</a>
            </h3>
            <h4 className="product-price">${this.state.product.precio}</h4>

            <div className="product-btns">
              <button className="add-to-wishlist">
                <i className="fa fa-heart-o" />
                <span className="tooltipp">Favoritos</span>
              </button>
              
              <button className="quick-view" data-toggle="modal" data-target={`#${this.state.product.id}`}>
                  <i className="fa fa-eye" />
                <span className="tooltipp">Ver Detalle</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default withStyles(s)(ProductsItemList);
