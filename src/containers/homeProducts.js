import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as productsActions from '../ducks/products';

class homeProducts extends React.Component {
  componentDidMount() {
    this.props.fetchproductsList();
  }
  render() {
    const productslist = this.props.products;
    console.log(productslist);
    return (
      <div> 
          <div className="col-md-12">
						<div className="section-title">
							<h3 className="title">Nuevos Productos Computacion</h3>
							<div className="section-nav">
								<ul className="section-tab-nav tab-nav">
									<li className="active"><a data-toggle="tab" href="#tab1">Aceleradoras Graficas</a></li>
									<li><a data-toggle="tab" href="#tab1">Monitores</a></li>
									<li><a data-toggle="tab" href="#tab1">Gabinete</a></li>
									<li><a data-toggle="tab" href="#tab1">Mother Boards</a></li>
								</ul>
							</div>
						</div>
					</div>
						<div className="col-md-12">
							<div className="row">
									<div className="col-md-3">
										<div className="product">
											<a href="product.html">
											<div className="product-img">
												<img src="./img/product01.png" alt=""/>
												<div className="product-label">
													<span className="sale">-30%</span>
													<span className="new">Nuevo</span>
												</div>
											</div>
											<div className="product-body">
												<p className="product-category">Computacion</p>
												<h3 className="product-name"><a href="#">Notebook 14" i5 8gb RAM</a></h3>
												<h4 className="product-price">$17800.00 <del className="product-old-price">$19900.00</del></h4>

												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">Favoritos</span></button>
													<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">Comparar</span></button>
													<button className="quick-view"><a href="product.html"><i className="fa fa-eye"></i></a><span className="tooltipp">Ver Detalle</span></button>
												</div>
											</div>
											</a>
										</div>
									</div>
									<div className="col-md-3">									
                     {/* product */}
										<div className="product">
											<a href="product.html">
											<div className="product-img">
												<img src="./img/product02.png" alt=""/>
												<div className="product-label">
													<span className="new">Nuevo</span>
												</div>
											</div>
											<div className="product-body">
												<p className="product-category">Hogar</p>
												<h3 className="product-name"><a href="#">Auriculares</a></h3>
												<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
		
												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">Favoritos</span></button>
													<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">Comparar</span></button>
													<button className="quick-view"><a href="product.html"><i className="fa fa-eye"></i></a><span className="tooltipp">Ver Detalle</span></button>
												</div>
											</div>
											</a>
										</div>
									</div>
									<div className="col-md-3">									
                    {/* product */}
										<div className="product">
											<a href="product.html">
											<div className="product-img">
												<img src="./img/product03.png" alt=""/>
												<div className="product-label">
													<span className="sale">-30%</span>
												</div>
											</div>
											<div className="product-body">
												<p className="product-category">Computacion</p>
												<h3 className="product-name"><a href="#">Notebook 13" 4gb RAM SSD 128Gb</a></h3>
												<h4 className="product-price">$21980.00 <del className="product-old-price">$22990.00</del></h4>

												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">Favoritos</span></button>
													<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">Comparar</span></button>
													<button className="quick-view"><a href="product.html"><i className="fa fa-eye"></i></a><span className="tooltipp">Ver Detalle</span></button>
												</div>
											</div>
											</a>	
										</div>
									</div>
									<div className="col-md-3">
										 {/* product */}
										<div className="product">
											<a href="product.html">
											<div className="product-img">
												<img src="./img/product04.png" alt=""/>
											</div>
											<div className="product-body">
												<p className="product-category">Computacion</p>
												<h3 className="product-name"><a href="#">Tablet 7"</a></h3>
												<h4 className="product-price">$1280.00 <del className="product-old-price">$1590.00</del></h4>

												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">Favoritos</span></button>
													<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">Comparar</span></button>
													<button className="quick-view"><a href="product.html"><i className="fa fa-eye"></i></a><span className="tooltipp">Ver Detalle</span></button>
												</div>
											</div>
											</a>
										</div>
									</div>	


									</div>
									<div id="slick-nav-1" className="products-slick-nav"></div>
								</div>


       
		</div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps, productsActions)(homeProducts);
