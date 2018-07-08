import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as productsActions from '../ducks/products';

class Silfabproducts extends React.Component {
  componentDidMount() {
    this.props.fetchproductsList();
  }
  render() {
    const productslist = this.props.products;
    console.log(productslist);
    return (
      <div> 
         <div className="row">
          {productslist.map(product => (


            <div className="col-sm-3" >
										<div className="product">
											<a href="product.html">
											<div className="product-img">
												<img src="../img/default.jpg" alt=""/>
												<div className="product-label">
													<span className="new">Nuevo</span>
												</div>
											</div>
											<div className="product-body">
												<p className="product-category">{product.categoria}</p>
												<h3 className="product-name"><a href="#">{product.nombre}</a></h3>
												<h4 className="product-price">${product.precio}</h4>
		
												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">Favoritos</span></button>
													<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">Comparar</span></button>
													<button className="quick-view"><a href="product.html"><i className="fa fa-eye"></i></a><span className="tooltipp">Ver Detalle</span></button>
												</div>
											</div>
											</a>
										</div>
            </div>
			))}

		 </div>
		</div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps, productsActions)(Silfabproducts);
