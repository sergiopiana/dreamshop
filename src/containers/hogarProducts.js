import React, { Component } from 'react';
import _ from 'lodash';
import Loading from '../components/Loading';
import ProductsItemList from '../components/ProductsItemList';

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
		render() {
		if (_.isEmpty(this.state.products)){
			return(
				<div>
					{console.log("sin datos")}
					<Loading/>
				</div>    
			)
		}			
    const productslist = this.state.products;
    return (
      <div> 
							{console.log("condatos")}
         <div className="row">
          {productslist.map(product => (
						<ProductsItemList item={product} md="col-md-3" xs="col-xs-6"/>     
					))}

		 </div>
		</div>
    );
  }
}

export default (HogarProducts);
