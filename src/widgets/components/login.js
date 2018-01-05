import React from 'react';
import './login.css';
import ArrowDown from '../../icons/components/arrow-down';

function Login (props) {
  return(
    <div className="Login">
    {
      !props.userLogged ?
      <button 
        className="LoginButton"
        onClick={props.handleClick} 
        >
        Login
      </button>
      :
      <div className="UserLogged">
        <button onClick={props.handleLogOff}>
          <ArrowDown size={25} color="#6e727c"/>
        </button>
        <img className="ImgUserLogged" src={props.userLogged.profileImg}/>
        <span className="NameUserLogged">{props.userLogged.name}</span>
      </div>
    }
      
    </div>
  )
}

export default Login;