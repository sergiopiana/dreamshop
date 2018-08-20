import React, { Component } from 'react';
import _ from 'lodash';
import Loading from '../components/Loading';

class TreeSalud extends React.Component {
	constructor(props){
        super(props)
		this.state = {categs:[] }  
	}
  componentDidMount() {
    fetch('/api/rubrosSalud')
    .then(response => response.json())
    .then((json) => {
      this.setState({categs:json.response.docs })
        })
   // this.props.selectedRubro.push = 'aaaa';
	}
		render() {
            
			if (_.isEmpty(this.state.categs)){
				return(
					<div>
						<Loading/>
					</div>    
				)
			}			
            const rubroslist = this.state.categs;
    return (
        <div> 
            <div className="list-group" style={{border:"1px"}}>
            {rubroslist.map(categ => (
                <a onClick={() => this.props.action(categ.rubro)} value={categ.rubro} style={{fontSize:"10px"}} href="#" className="list-group-item">{categ.rubro}</a>
            ))}
            </div>
	    </div>
    );
  }
}

export default (TreeSalud);
