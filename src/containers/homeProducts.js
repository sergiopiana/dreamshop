import React, { Component } from 'react';
import _ from 'lodash';
import Loading from '../components/Loading';
import ProductsItemList from '../components/ProductsItemList';
import { Grid, Row, Col } from 'react-flexbox-grid';

class homeProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { productsHogar: [] };
  }
  componentDidMount() {
    fetch('/api/productsHogar?row=10')
      .then(response => response.json())
      .then(json => {
        this.setState({ productsHogar: json.response.docs });
      });
  }
  render() {
    const productslistHogar = this.state.productsHogar;

    if (_.isEmpty(productslistHogar)) {
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
			<Grid fluid>
			<Row>
            {productslistHogar.map(product => (
				<ProductsItemList item={product} />
			))}
			</Row>
          </Grid>
          <div id="slick-nav-1" className="products-slick-nav" />
        </div>
      </div>
    );
  }
}

export default homeProducts;
