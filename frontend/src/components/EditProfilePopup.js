import { useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import useForm from "../hooks/useForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, onChanging }) {
  const currentUser = useContext(CurrentUserContext);
  
  const { values, handleChange, setInputValues } = useForm();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({ 
      name: values.name, 
      about: values.about 
    });
  }

  useEffect(() => {
    setInputValues("name", currentUser.name);
    setInputValues("about", currentUser.about)
  }, [currentUser, isOpen]); 

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="edit"
      title="Редактировать профиль"
      buttonText={onChanging ? "Сохранение..." : "Сохранить"}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__fields">
        <input
          className="popup__input popup__input_name"
          name="name"
          type="text"
          minLength="2"
          maxLength="40"
          required
          id="name"
          placeholder="Имя"
          onChange={handleChange}
          value={values.name || ""}
        />
        <span id="name-error" className="error"></span>
      </fieldset>
      <fieldset className="popup__fields">
        <input
          className="popup__input popup__input_job"
          name="about"
          type="text"
          minLength="2"
          maxLength="200"
          required
          id="about"
          placeholder="Вид деятельности"
          onChange={handleChange}
          value={values.about || ""}
        />
        <span id="job-error" className="error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
