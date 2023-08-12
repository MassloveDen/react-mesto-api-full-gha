import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, onChanging }) {
  const avatar = useRef("");

  useEffect(() => {
    avatar.current.value = '' // thanks!
  },[isOpen])

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatar.current.value,
    });
  }
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="avatar"
      title="Обновить аватар"
      onSubmit={handleSubmit}
      buttonText={onChanging ? "Сохранение..." : "Сохранить"}
    >
      <fieldset className="popup__fields">
        <input
          className="popup__input popup__input_type_avatar"
          name="avatar"
          type="url"
          placeholder="Ссылка на картинку"
          required
          id="avatar"
          ref={avatar}
        />
        <span id="avatar-error" className="error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
