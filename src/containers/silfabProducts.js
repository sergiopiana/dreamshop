import React, { Component } from 'react';
import _ from 'lodash';
import Loading from '../components/Loading';
import ProductsItemList from '../components/ProductsItemList';


class Silfabproducts extends React.Component {
	constructor(props){
		super(props)
		this.state = {products:[] }  
	}
  componentDidMount() {
		fetch('/api/productsSilfab')
    .then(response => response.json())
    .then((json) => {
      this.setState({products:json.response.docs })
		
		})
	}
		render() {
			if (_.isEmpty(this.state.products)){
				return(
					<div>
						<Loading/>
					</div>    
				)
			}			
    const productslist = this.state.products;
    return (
		<div className="container">
				<div className="col-md-3">
					<img src="img/logo_02.png" />
				</div>
				<div className="col-md-9">

							{productslist.map(product => (
								<ProductsItemList item={product} md="col-md-4" xs="col-xs-6" />
							))}

				</div>
		</div>			
    );
  }
}

export default (Silfabproducts);
