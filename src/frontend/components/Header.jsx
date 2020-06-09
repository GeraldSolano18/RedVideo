/* eslint-disable no-restricted-globals */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo.svg';
import usericon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user } = props;//destructuramos user de props para usar user y no props.user
  //si hasUser es mayor que 0 entonces si hay un ususario
  const hasUser = Object.keys(user).length > 0; //Constante para saber si hay un usuaario Object.keys() debuelve la cantidad de elementos que tiene el ojecto

  const handleLogout = () => {
    props.logoutRequest({});
  };
  return (

    <header className={//verifica si el componente Header esta en la seccion de de login o de registro, si
      //es asi pasa otro color al background 
      location.pathname === "/login" || location.pathname === "/register" ?
        "header header__login-register" :
        "header"
    } 
    >
      <Link to="/">
        <img className="header__img" src={logo} alt="Red video" />
      </Link>

      <div className="header__menu">
        <div className="header__menu--profile">

          { 
            hasUser ? //has user es true?
              <img src={gravatar(user.email)} alt={user.email} className="gravatar_icon" /> : 
              <img src={usericon} alt="Hola" />
          }

          <p>Perfil</p>
        </div>
        <ul>

          {
            hasUser ?
              <li><Link to="/">{user.name}</Link></li> :
              null
          }
          {
            hasUser ? (
              // eslint-disable-next-line react/jsx-no-bind
              <li onClick={handleLogout}>
                <Link to="/">Cerrar Sesión</Link>
              </li>
            ) : (
              <div>
                <li>
                  <Link to="/login">
                    Iniciar Sesión
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    Registe
                  </Link>
                </li>
              </div>
              
            )
          }

        </ul>
      </div>
    </header>

  );
};
//trae del estado el elemento user que viene de state.user
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
//las acciones que se disparan 
const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
