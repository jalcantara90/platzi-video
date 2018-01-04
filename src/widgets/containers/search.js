import React, { Component } from 'react';
import Search from '../components/search';

class SearchContainer extends Component {
  // constructor(props) {
  //   super(props)
  // }
  state = {
    value: ''
  }
  handleSubmit = event => {
    event.preventDefault();
    console.log('submit', this.input.value);
  }
  setInputRef = element => {
    this.input = element;
  }

  handleInputChange = event => {
    this.setState({
      // value: event.target.value.replace(' ','-')
      value: event.target.value
    })
  }
  render() {
    return(
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.props.handleInputChange}
        value={this.props.inputValue}
      />
    )
  }
}

export default SearchContainer;