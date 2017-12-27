import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent { //tiene should component siempre por defecto
  state = {
    author: this.props.author
  }

  // handleClick = event => {
  //   console.log(this.props.title);
  //   this.setState({
  //     author: 'Jonathan Alcántara'
  //   })
  // }
  render() {
    return(
      <div className="Media" onClick={this.props.handleClick}>
        <div className="Media-cover">
          <img 
            className="Media-image"
            src={this.props.cover}
            alt=""
            width={260}
            height={160}
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.state.author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;