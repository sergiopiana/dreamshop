import React, { Component } from 'react';
import _ from 'lodash';
import Loading from '../components/Loading';
import ProductsItemList from '../components/ProductsItemList';
import TreeHogar from '../containers/treeHogar';

class HogarProducts extends React.Component {
	constructor(props){
		super(props)
		this.state = {products:[] }  
	}
  componentDidMount() {
		fetch('/api/products?row=100&fq=rubro&valor=hogar')
    .then(response => response.json())
    .then((json) => {
      this.setState({products:json.response.docs })
		
		})
	}
	
	filtro = (valor) => {
			this.setState({products:[] })
			fetch(`/api/products?row=100&fq=rubro&valor=${valor}`)
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
								<TreeHogar action={this.filtro.bind()}/>
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
					<TreeHogar action={this.filtro.bind()}/>
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


export default (HogarProducts);
