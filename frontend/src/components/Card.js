import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <div className="element">
      <img
        className="element__image"
        alt={card.name}
        src={card.link}
        onClick={handleClick}
      />
      <div className="element__context">
        <h2 className="element__figcaption">{card.name}</h2>
        <div className="element__like">
          <button
            type="button"
            className={`element__like-button ${
              isLiked && "element__like-button_active"
            }`}
            onClick={handleLikeClick}
          ></button>
          <span className="element__number">{card.likes.length}</span>
        </div>
        {isOwn && (
          <button
            type="button"
            className="element__delete-button"
            onClick={handleDeleteClick}
          />
        )}
      </div>
    </div>
  );
}

export default Card;
