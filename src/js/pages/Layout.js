import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';




export default class Layout extends React.Component {
  render() {
    return (
    	<div>
      <Link to='/SignIn'> SignIN </Link>
      <Link to='/SignUp'> SignUp </Link>
      <Link to='/'> HOME </Link>
      {this.props.children}	
		</div>    
    );
  }
};





