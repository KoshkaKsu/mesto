import './index.css';

import {initialCards} from '../scripts/initialCards.js'
import Section from '../scripts/Section.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithForm from "../scripts/PopupWithForm.js";
import Card from '../scripts/Card.js';
import {FormValidator} from '../scripts/FormValidator.js';
import UserInfo from '../scripts/UserInfo.js'

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

const imagePopup = document.querySelector('.popup_type_image');

const userInfo = new UserInfo({nameSelector, jobSelector});
const popupWithImage = new PopupWithImage(imagePopup);
popupWithImage.setEventListeners();

const popupEditForm = new PopupWithForm(profilePopup, (formInputs) => {
  const newProfileValues = {
    name: formInputs.name,
    job: formInputs.job
  }
  userInfo.setUserInfo(newProfileValues);
});
popupEditForm.setEventListeners();

const popupCardForm = new PopupWithForm(cardPopup, (formInputs) => {
  const card = new Card({
    link: formInputs.link,
    name: formInputs.title
    }, ".photo-template", (link, title) => {
    popupWithImage.openPopup(link, title);
  });
const cardElement = card.generateCard();
cardList.prependItem(cardElement);
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
    const card = new Card(item, ".photo-template", (name, link) => {
      popupWithImage.openPopup(name, link);
    });
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}, photosList);
cardList.renderItems();

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


