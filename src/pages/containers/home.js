import React, {Component} from 'react';
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';

class Home extends Component {
  state = {
    modalVisible: false,
    inputValue: '',
    categories: []
  }

  handleOpenModal = (media) => {
    this.setState({
      modalVisible: true,
      media
    })
  }

  handleCloseModal = event => {
    this.setState({
      modalVisible: false,
    })
  }

  handleInputChange = event => {
    let searchedMedia = {"playlist": []}
    this.props.data.categories.forEach(category => {
      category.playlist.forEach(media => {
          if (media.title.toUpperCase().indexOf(event.target.value.toUpperCase()) >= 0 ) {
            searchedMedia.playlist.push(media);
          }else if (media.author.toUpperCase().indexOf(event.target.value.toUpperCase()) >= 0) {
            searchedMedia.playlist.push(media);
          }
        })
        return searchedMedia
    })
    this.setState({
      // value: event.target.value.replace(' ','-')
      inputValue: event.target.value,
      categories: searchedMedia
    })

  }

  render(){
    return(
      <HandleError>
        <HomeLayout>
          <Related />   
            <Categories categories={this.props.data.categories} 
            handleOpenModal={this.handleOpenModal}
            handleInputChange={this.handleInputChange}
            inputValue={this.state.inputValue}
            searched={this.state.categories}
          />
          {
            this.state.modalVisible &&  
            <ModalContainer>
              <Modal
                handleClick={this.handleCloseModal}>
                <VideoPlayer 
                  autoplay
                  src={this.state.media.src}
                  title={this.state.media.title}
                />
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

export default Home;