import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";

function Register({ handleRegister }) {
  const { values, handleChange, reset } = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(values);
  }

  useEffect(() => {
    reset();
  }, [reset]);

  return (
    <section className="auth">
      <h2 className="auth__title">Регистрация</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <fieldset className="auth__fieldset">
          <input
            className="auth__input auth__input_type_email"
            name="email"
            type="email"
            required
            id="email"
            placeholder="Email"
            onChange={handleChange}
            value={values.email || ""}
            autoComplete="on"
          />
          <span id="email-error" className="error"></span>
        </fieldset>
        <fieldset className="auth__fieldset">
          <input
            className="auth__input auth__input_type_password"
            name="password"
            type="password"
            required
            id="password"
            placeholder="Пароль"
            onChange={handleChange}
            value={values.password || ""}
            autoComplete="on"
          />
          <span id="password-error" className="error"></span>
        </fieldset>
        <button type="submit" className="auth__button">
          Зарегистрироваться
        </button>
      </form>

      <div className="auth__box">
        <p className="auth__box_title">
          Уже зарегистрированы?
          <Link to="/sign-in" className="auth__box_link">
            &nbsp;Войти
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
