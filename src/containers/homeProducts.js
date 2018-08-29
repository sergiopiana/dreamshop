import React, { Component } from 'react';
import _ from 'lodash';
import Loading from '../components/Loading';
import ProductsItemList from '../components/ProductsItemList';

class homeProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { productsHogar: [], productsComputacion: [] };
  }
  componentDidMount() {
		fetch('/api/products?row=6&fq=rubro&valor=hogar')
      .then(response => response.json())
      .then(json => {
        this.setState({ productsHogar: json.response.docs });
      });


      fetch('/api/products?row=6&fq=!rubro&valor=hogar')
      .then(response => response.json())
      .then(json => {
        this.setState({ productsComputacion: json.response.docs });
      });    
  }
  render() {
    const productslistHogar = this.state.productsHogar;
    const productslistComputacion = this.state.productsComputacion;
    if (_.isEmpty(productslistHogar)&& _.isEmpty(productslistComputacion)) {
      return (
        <div>
          <Loading />
        </div>
      );
    }

    return (
      <div>
        <div className="col-md-12" style={{ paddingTop: '20px' }}>
          <div className="section-title">
            <h3 className="title">Nuevos Productos Hogar y Salud</h3>
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
							<div key={product.id} className=" col-xs-4  col-md-2">
                <ProductsItemList item={product}   />
              </div>
			))}
			</div>
          <div id="slick-nav-1" className="products-slick-nav" />
        </div>


<div className="col-md-12" style={{ paddingTop: '20px' }}>
          <div className="section-title">
            <h3 className="title">Nuevos Productos Computacion</h3>
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
            {productslistComputacion.map(product => (
							<div key={product.id} className=" col-xs-4  col-md-2">
              <ProductsItemList item={product}   />
            </div>
			))}
			</div>
          <div id="slick-nav-1" className="products-slick-nav" />
        </div>        
      </div>
    );
  }
}

export default homeProducts;
