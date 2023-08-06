import React from "react";

function PopupWithForm({
  name,
  isOpen,
  onClose,
  title,
  buttonText,
  onSubmit,
  ...props
}) {
  return (
    <section className={`popup popup__${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className="buttons popup__close-button"
          onClick={onClose}
        ></button>
        <h2 className="popup__heading">{title}</h2>
        <form className="popup__form" name={`${name}`} onSubmit={onSubmit}>
          {props.children}
          <button className="popup__save-button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
