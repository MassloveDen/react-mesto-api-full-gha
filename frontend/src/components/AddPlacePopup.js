import { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import useForm from "../hooks/useForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  
  const { values, handleChange, reset } = useForm();

  function handleSubmit(e) {
    console.log(123);
    e.preventDefault();

    onAddPlace({
      title: values.title,
      link: values.link,
    });
  }
  useEffect(() => {
    reset();
  }, [isOpen, reset]);

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
      name="add"
      title="Новое место"
      buttonText="Создать"
    >
      <fieldset className="popup__fields">
        <input
          className="popup__input popup__input_name"
          name="title"
          type="text"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
          id="name"
          onChange={handleChange}
          value={values.title || ""}
        />
        <span id="name-error" className="error"></span>
      </fieldset>
      <fieldset className="popup__fields">
        <input
          className="popup__input popup__input_type_link"
          name="link"
          type="url"
          placeholder="Ссылка на картинку"
          required
          id="link"
          onChange={handleChange}
          value={values.link || ""}
        />
        <span id="link-error" className="error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
