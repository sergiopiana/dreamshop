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
  <div className={s.root}>
    <div className={s.container}> 
      <div className="modal fade" id={`a${this.state.product.id}`} tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="myModalLabel">{this.state.product.nombre}</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <img className="img-fluid img-rounded" style={{maxHeight:"500px", maxWidth:"500px"}} src={this.imagenParser(this.state.product.imagen)}  alt="" />
                </div>
                <div className="col-md-6">
                  <div className="card" style={{fontSize:"12px", marginBottom:"10px"}}>
                    <div className="card-header">RUBRO</div>
                    <div className="card-body">
                      <b>{this.state.product.rubro}</b>
                    </div>
                  </div>  
                  <div className="card" style={{fontSize:"12px", marginBottom:"10px"}}>
                    <div className="card-header">DESCRIPCION</div>
                    <div className="card-body">
                      <p style={{textAlign:'justify'}}>{this.state.product.descripcion}</p>
                    </div>
                  </div>                    
                  <div className="card" style={{fontSize:"12px", marginBottom:"10px"}}>
                    <div className="card-header" style={{fontSize:"16px"}}>PRECIO</div>
                    <div className="card-body">
                      <h5 style={{color:"#d10024"}}>${this.state.product.precio}</h5>
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

        <div className="product" data-toggle="modal" data-target={`#a${this.state.product.id}`}>
          <div className="product-img" style={{backgroundImage:`url(${this.imagenParser(this.state.product.imagen)})`}}>
            <img className="img-fluid img-rounded d-none" style={{maxHeight:"200px", maxWidth:"200px"}} src={this.imagenParser(this.state.product.imagen)}  alt="" />
            <div className="product-label">
              <span className="new d-none">Consultar Stock</span>
            </div>
          </div>
          <div className="product-body">
            <p className="product-category">{this.state.product.rubro}</p>
            <h3 className="product-name">
              <a data-target={`#a${this.state.product.id}`} style={{color:"darkgrey", cursor:"pointer"}} role="button" data-toggle="modal">{this.state.product.nombre}</a>
            </h3>
            <h4 className="product-price">${this.state.product.precio}</h4>

{ /*           <div className="product-btns">
              <button className="add-to-wishlist">
                <i className="fa fa-heart-o" style={{color:"dimgrey"}} />
                <span className="tooltipp">Favoritos</span>
              </button>
              
              <button className="quick-view" data-toggle="modal" data-target={`#a${this.state.product.id}`}>
                  <i className="fa fa-eye" style={{color:"dimgrey"}}/>
                <span className="tooltipp">Ver Detalle</span>
              </button>
    </div>*/}
          </div>
        </div>
    </div>
</div>
    );
  }
}

export default withStyles(s)(ProductsItemList);
