import React, { Component } from 'react';
import _ from 'lodash';
import Loading from '../components/Loading';

class Silfabproducts extends React.Component {
	constructor(props){
		super(props)
		this.state = {products:[] }  
	}
  componentDidMount() {
		fetch('/api/productsHogar')
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
      <div> 
         <div className="row">
          {productslist.map(product => (

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
		</div>
    );
  }
}

export default (Silfabproducts);
