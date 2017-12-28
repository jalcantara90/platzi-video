import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import formatTime from '../../utilities';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    maxValue: 0,
    progress: 0,
    loading: false,
    volume: 1,
    colorVolume: 'white'
  }

  togglePlay = event => {
    this.setState({
      pause: !this.state.pause
    })
  }

  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }

  handleLoadedMetadata = event => {
    this.video = event.target; //asignamos el target al elemento de video
    this.setState({
      duration: formatTime(this.video.duration),
      maxValue: this.video.duration
    });
  }

  handleTimeUpdate = event => {
    this.setState({
      currentTime: formatTime(this.video.currentTime),
      progress: this.video.currentTime
    })
  }

  handleProgressChange = event => {
    //event.target.value
    this.video.currentTime = event.target.value;
  }

  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }

  handleSeeked = event => {
    this.setState({
      loading: false
    })
  }

  handleVolumeChange = event => {
    this.video.volume = event.target.value;
    this.setState({
      volume: this.video.volume
    })
  }

  handleClickVolume = event => {
    if (this.video.volume > 0) {
      this.video.volume = 0;
      this.setState({ colorVolume: '#d33e5d' })
    } else {
      this.setState({ colorVolume: 'white' })
      this.video.volume = this.state.volume;
    }
  }

  render() {
    return(
      <VideoPlayerLayout>
        <Title 
          title="Esto es un video"
        />
        <Controls>
          <PlayPause 
            pause={this.state.pause}
            handleClick={this.togglePlay}/>
          <Timer 
            duration={this.state.duration}
            currentTime={this.state.currentTime}
            />
          <ProgressBar 
            duration={this.state.duration}
            maxValue={this.state.maxValue}
            progress={this.state.progress}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume 
            handleVolumeChange={this.handleVolumeChange}
            handleClickVolume={this.handleClickVolume}
            colorVolume={this.state.colorVolume}
          />
        </Controls>
        <Spinner 
          active={this.state.loading}
        />
        <Video 
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;