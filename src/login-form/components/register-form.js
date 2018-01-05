import React from 'react';
import './login-form.css';
const RegisterForm = props => {
  return(
    <div className="LoginForm">
      <form onSubmit={props.register} className="RegisterForm">
        <input className="InputLogin" value={props.userName} onChange={props.handleInputChange} type="text" name="userName" placeholder="Nombre y apellidos"/>
        <input className="InputLogin" value={props.userEmail} onChange={props.handleInputChange} type="email" name="userEmail" placeholder="Correo electrónico"/>
        <input className="InputLogin" value={props.userPassword} onChange={props.handleInputChange} type="password" name="userPassword" placeholder="Contraseña"/>
        <button className="ButtonLogin">Registrarse</button>
      </form>
      <p className="GoToRegister">¿Ya tienes usuario? <span onClick={props.loginOrRegister}>¡Autentícate!</span></p>
    </div>
  ) 
}

export default RegisterForm;