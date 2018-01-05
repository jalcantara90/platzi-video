import React , { Component } from 'react';

class LoginFormContainer extends Component {
  render() {
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default LoginFormContainer;