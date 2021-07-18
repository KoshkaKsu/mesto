export const validateConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__profile',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active',
    templateClass: '.photo-template',
  };

export const profilePopup = document.querySelector('.popup_type_profile-edit');
export const profileEditButton = document.querySelector('.profile__edit-button');
export const profileEditAvatarButton = document.querySelector('.profile__edit-button-avatar');
export const profilePopupForm = document.querySelector('.popup__form_edit-profile');

export const nameSelector = '.profile__name';
export const jobSelector = '.profile__job';
export const avatarSelector = '.profile__avatar'
export const profileNameInput = profilePopup.querySelector('.popup__profile_name_name');
export const profileJobInput = profilePopup.querySelector('.popup__profile_name_job');

export const cardPopup = document.querySelector('.popup_type_card-add');
export const cardPopupForm = cardPopup.querySelector('.popup__form_card-add');
export const cardAddButton = document.querySelector('.profile__add-button');

export const photosList = document.querySelector('.elements');

export const avatarPopup = document.querySelector('.popup_type_avatar-edit');
export const avatarPopupForm = avatarPopup.querySelector('.popup__form_avatar-update');