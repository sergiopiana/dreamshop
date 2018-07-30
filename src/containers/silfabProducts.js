import React, { Component } from 'react';
import _ from 'lodash';
import Loading from '../components/Loading';
import ProductsItemList from '../components/ProductsItemList';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Silfabproducts extends React.Component {
	constructor(props){
		super(props)
		this.state = {products:[] }  
	}
  componentDidMount() {
		fetch('/api/productsSilfab')
    .then(response => response.json())
    .then((json) => {
      //console.log("Deta"+json.title)
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
    console.log(productslist);
    return (
			<div className="col-md-12">

         <Grid fluid>
					<Row around="md">
						{productslist.map(product => (
							<ProductsItemList item={product} />
						))}
					</Row>
          </Grid>
		</div>
    );
  }
}

export default (Silfabproducts);
