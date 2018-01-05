import React from 'react';
import './login-form.css';
const LoginForm = props => {
  return(
    <div className="LoginForm">
      <form onSubmit={props.login}>
        <input className="InputLogin" value={props.userEmail} onChange={props.handleInputChange} type="email" name="userEmail" placeholder="Correo electrónico"/>
        <input className="InputLogin" value={props.userPassword} onChange={props.handleInputChange} type="password" name="userPassword" placeholder="Contraseña"/>
        <button className="ButtonLogin">Inicia Sesión</button>
      </form>
      {
        props.errorLogin &&
        <p className="ErrorLogin"> {props.errorLogin} </p>
      }
      <p className="GoToRegister">¿Aún no tienes usuario? <span onClick={props.loginOrRegister}>¡Regístrate!</span></p>
    </div>
  ) 
}

export default LoginForm;