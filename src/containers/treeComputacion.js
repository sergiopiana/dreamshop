import React, { Component } from 'react';
import _ from 'lodash';
import Loading from '../components/Loading';

class TreeComputacion extends React.Component {
	constructor(props){
        super(props)
		this.state = {categs:[] }  
	}
  componentDidMount() {
	fetch('/api/rubrosComputacion')
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
            <div className="list-group">
            {rubroslist.map(categ => (
                <a key={categ.rubro} onClick={() => this.props.action(categ.rubro)} value={categ.rubro} style={{fontSize:"12px",border:"0px"}} href="#" className="list-group-item list-group-item-action">{categ.rubro}</a>
            ))}
            </div>
	    </div>
    );
  }
}

export default (TreeComputacion);
