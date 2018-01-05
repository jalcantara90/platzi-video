import React, { Component } from 'react';
import Login from '../components/login';

class LoginContainer extends Component { 
  render() {
    return(
      <Login handleClick={this.props.handleClick} userLogged={this.props.userLogged} handleLogOff={this.props.closeModalLogin}/> 
    )
  }
}

export default LoginContainer;