import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Loading from '../components/Loading';
import ProductsItemList from '../components/ProductsItemList';
import * as busquedaActions from '../ducks/busqueda';


class BusquedaProducts extends React.Component {
	constructor(props){
		super(props)
		this.state = {products:[] }  
	}
componentDidMount() {
	this.props.fetchMostrar();
	fetch(`/api/busqueda?product=${this.props.busqueda}`)
		.then(response => response.json())
		.then((json) => {
		this.setState({products:json.response.docs })
	}) 
	}

componentWillReceiveProps(nextProps) {
	this.setState({products:[]})
	console.log('valor'+nextProps.busqueda);

	fetch(`/api/busqueda?product=${nextProps.busqueda}`)
		.then(response => response.json())
		.then((json) => {
		this.setState({products:json.response.docs })
	}) 
}
		render() {
			if (_.isEmpty(this.state.products)){
				return(
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-3">
							</div>
						</div>	
						<div className="col-md-9">
						<div className="row">						
							<Loading/>
						</div>	
						</div>
					</div>  
				)
			}			
		const productslist = this.state.products;
		return (
		<div className="container-fluid">	
			<div className="row">
				<div className="col-md-3">
				</div>
				<div className="col-md-9">
					<div className="row">
						{productslist.map(product => (
							<div key={product.id} className=" col-6  col-md-4">
							<ProductsItemList item={product}   />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
		);
	}
}


const mapStateToProps = state => ({
	busqueda: state.busqueda,
  });
  
  export default connect(mapStateToProps, busquedaActions)(BusquedaProducts);

