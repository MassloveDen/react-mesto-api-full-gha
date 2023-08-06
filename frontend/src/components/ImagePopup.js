import React from "react";

function ImagePopup({ card, onClose, isOpen }) {
  return (
    <section className={`popup popup_type_popup-gallery ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__gallery">
        <img className="popup__image" src={card?.link} alt={card?.name} />
        <h2 className="popup__title">{card?.name}</h2>
        <button className="buttons popup__close-button" onClick={onClose}></button>
      </div>
    </section>
  );
};

export default ImagePopup;