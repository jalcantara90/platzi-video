import React, {Component} from 'react';
import './video.css';
class Video extends Component {
  togglePlay() {
    if (this.props.pause) {
      this.video.play();
    } else {
      this.video.pause();
    }
  }

  setRef = element => {
    this.video = element;
  }

  componentWillReceiveProps(nextProps) { // porqué va a recibir props
    if (nextProps.pause !== this.props.pause) {
      this.togglePlay();
    }
  }
  render() {
    const {
      handleLoadedMetadata
    } = this.props;

    return (
      <div className="Video">
        <video
          autoPlay={this.props.autoplay}
          src={this.props.src}
          ref={this.setRef}
          onLoadedMetadata={handleLoadedMetadata}
        />
      </div>
    )
  }
}

export default Video;