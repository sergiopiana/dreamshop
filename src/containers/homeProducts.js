import React, { Component } from 'react';
import _ from 'lodash';
import Loading from '../components/Loading';

class homeProducts extends React.Component {
	constructor(props){
		super(props)
		this.state = {productsHogar:[] }  
	}
 	componentDidMount() {
		fetch('/api/productsHomeHogar')
			.then(response => response.json())
			.then((json) => {
      			this.setState({productsHogar:json.response.docs })
			})
	}
	render() {
		
    const productslistHogar = this.state.productsHogar;

    return (
      <div> 
          <div className="col-md-12">
						<div className="section-title">
							<h3 className="title">Nuevos Productos Hogar</h3>
							{/* <div className="section-nav">
								<ul className="section-tab-nav tab-nav">
									<li className="active"><a data-toggle="tab" href="#tab1">Aceleradoras Graficas</a></li>
									<li><a data-toggle="tab" href="#tab1">Monitores</a></li>
									<li><a data-toggle="tab" href="#tab1">Gabinete</a></li>
									<li><a data-toggle="tab" href="#tab1">Mother Boards</a></li>
								</ul>
							</div> */}
						</div>
					</div>
						<div className="col-md-12">
							<div className="row">
								{productslistHogar.map(product => (
									<div className="col-sm-3" >
																<div className="product">
																	
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
																</div>
									</div>
									))}



							</div>
							<div id="slick-nav-1" className="products-slick-nav"></div>
						</div>


       
		</div>
    );
  }
}



export default (homeProducts);
