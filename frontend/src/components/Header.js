import React from "react";
import headerLogo from "../images/logo.svg";
import { Link, useLocation } from "react-router-dom";

function Header({ email, onExit, loggedIn }) {
  const location = useLocation();
  
  return (
    <header className="header">
      <div className="header__container">
        <img
          src={headerLogo}
          className="header__logo"
          alt="Логотип Mesto Russia"
        />
        {location.pathname === "/sign-in" && (
          <Link className="header__link" to="/sign-up">
            Регистрация
          </Link>
        )}

        {location.pathname === "/sign-up" && (
          <Link className="header__link" to="/sign-in">
            Войти
          </Link>
        )}
        {loggedIn && (
          <div className="header__account">
            <p className="header__email">{email}</p>
            <button className="header__exit" onClick={onExit}>
              Выйти
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
