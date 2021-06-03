import './index.css';

import {initialCards} from '../scripts/initialCards.js'
import Section from '../scripts/components/Section';
import PopupWithImage from '../scripts/components/PopupWithImage';
import PopupWithForm from "../scripts/components/PopupWithForm";
import Card from '../scripts/components/Card';
import {FormValidator} from '../scripts/components/FormValidator';
import UserInfo from '../scripts/components/UserInfo';

const profilePopup = document.querySelector('.popup_type_profile-edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const profilePopupForm = document.querySelector('.popup__form_edit-profile');
const nameSelector = '.profile__name';
const jobSelector = '.profile__job';
const profileNameInput = profilePopup.querySelector('.popup__profile_name_name');
const profileJobInput = profilePopup.querySelector('.popup__profile_name_job');

const cardPopup = document.querySelector('.popup_type_card-add');
const cardPopupForm = cardPopup.querySelector('.popup__form_card-add');
const cardAddButton = document.querySelector('.profile__add-button');

const photosList = document.querySelector('.elements');

const userInfo = new UserInfo({nameSelector, jobSelector});
const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

const popupEditForm = new PopupWithForm('.popup_type_profile-edit', (formInputs) => {
  const newProfileValues = {
    name: formInputs.name,
    job: formInputs.job
  }
  userInfo.setUserInfo(newProfileValues);
});
popupEditForm.setEventListeners();

const popupCardForm = new PopupWithForm('.popup_type_card-add', (formInputs) => {
  cardList.prependItem(createCard({
    link: formInputs.link,
    name: formInputs.title
  }));
})

popupCardForm.setEventListeners();

const validateConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__profile',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
  templateClass: '.photo-template',
};

const addFormValidator = new FormValidator (validateConfig, cardPopupForm);
addFormValidator.enableValidation();
const editFormValidator = new FormValidator (validateConfig, profilePopupForm);
editFormValidator.enableValidation();

const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    cardList.addItem(createCard(item));
  }
}, photosList);
cardList.renderItems();

function createCard(item) {
  const card = new Card(item, ".photo-template", {revealPhoto: (name, link) => {
    popupWithImage.openPopup({name, link});
    }});
  return card.generateCard();
}

profileEditButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  evt.stopPropagation();
  const profileInfo = userInfo.getUserInfo(); 
  profileNameInput.value = profileInfo.name;
  profileJobInput.value = profileInfo.job;
  editFormValidator.resetValidation();
  popupEditForm.openPopup();
});

cardAddButton.addEventListener("click", (evt) => {
  cardPopupForm.reset();
  evt.preventDefault()
  evt.stopPropagation()
  addFormValidator.resetValidation();
  popupCardForm.openPopup();
});


