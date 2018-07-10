
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Loading.css';
import { ScaleLoader } from 'react-spinners';

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
        }
  render() {
    return (
        <ScaleLoader
            color={'#4A90E2'} 
            loading={this.state.loading} 
        />
    );
  }
}

export default withStyles(s)(Loading);

