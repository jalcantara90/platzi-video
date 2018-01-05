import React, {Component} from 'react';
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';
import LoginFormContainer from '../../login-form/containers/login-form';
import LoginForm from '../../login-form/components/login-form';
import RegisterForm from '../../login-form/components/register-form';
import RelatedPlaylist from '../../related-playlist/components/related-playlist';
import FriendsPlaylist from '../../related-playlist/components/friends-playlist';

class Home extends Component {
  state = {
    modalVisible: false,
    inputValue: '',
    categories: [],
    userLogged: false,
    modalLogin: false,
    login: true,
    user: [],
    nameUser: '',
    emailUser: '',
    passwordUser: '',
    dataUserLogged : '',
    errorLogin: ''
  }

  componentDidMount(){
    this.setState({
      user: this.props.userData
    })
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
          if (media.title.toUpperCase().indexOf(event.target.value.toUpperCase()) >= 0 || media.author.toUpperCase().indexOf(event.target.value.toUpperCase()) >= 0) {
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

  openModalLogin = () => {
    this.setState({
      modalLogin: true
    })
  }

  closeModalLogin = () => {
    this.setState({
      dataUserLogged: '',
      modalLogin: false
    })
  }

  loginOrRegister = () => {
    this.setState({
      login: !this.state.login
    })
  }

  login = (event) => {
    event.preventDefault();
    let loginCorrecto = false;
    this.state.user.users.forEach(user => {
      if (user.email === this.state.userEmail && user.password == this.state.userPassword) {
        this.setState({
          dataUserLogged: user,
          modalLogin: false
        })
        loginCorrecto = true;
      }
    })
    if(!loginCorrecto) {
      alert('Usuario o contraseña inválido.')
    }
  }

  register = event => {
    event.preventDefault();
    let users = this.state.user;
    let newUser = {
      name: this.state.userName,
      email: this.state.userEmail,
      password: this.state.userPassword,
      profileImg: 'https://res.cloudinary.com/closebrace/image/upload/w_400/v1491315007/usericon_id76rb.png'
    }

    users.users.push(newUser);

    this.setState({
      dataUserLogged: newUser,
      user: users,
      modalLogin: false
    })
  }

  handleLoginOrRegisterInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render(){
    return(
      <HandleError>
        <HomeLayout>
          <Related>
            <RelatedPlaylist myPlaylist={this.state.dataUserLogged.playlist}/>
            <FriendsPlaylist friendsPlaylist={this.state.dataUserLogged.friends}/>
          </Related>
          <Categories 
            openLoginModal={this.openModalLogin}
            userLogged={this.state.dataUserLogged}
            closeModalLogin={this.closeModalLogin}
            categories={this.props.data.categories} 
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
          {
            this.state.modalLogin &&
            <ModalContainer>
              <Modal
                handleClick={this.closeModalLogin}>
                <LoginFormContainer>
                  {
                    this.state.login ?
                      <LoginForm 
                        errorLogin={this.errorLogin}
                        userEmail={this.state.userEmail} 
                        userPassword={this.state.userPassword}
                        loginOrRegister={this.loginOrRegister} 
                        login={this.login} 
                        handleInputChange={this.handleLoginOrRegisterInputChange}
                      />
                    :
                      <RegisterForm 
                        userName={this.state.userName} 
                        userEmail={this.state.userEmail} 
                        userPassword={this.state.userPassword}
                        loginOrRegister={this.loginOrRegister} 
                        register={this.register} 
                        handleInputChange={this.handleLoginOrRegisterInputChange}
                      />
                  }
                </LoginFormContainer>
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

export default Home;