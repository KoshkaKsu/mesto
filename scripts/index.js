import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

const profilePopup = document.querySelector('.popup_type_profile-edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileCloseButton = profilePopup.querySelector('.popup__button-close');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const profileNameInput = profilePopup.querySelector('.popup__profile_name_name');
const profileJobInput = profilePopup.querySelector('.popup__profile_name_job');

const cardPopup = document.querySelector('.popup_type_card-add');
const cardPopupForm = cardPopup.querySelector('.popup__form_card-add');
const cardAddButton = document.querySelector('.profile__add-button');
const cardCloseButton = cardPopup.querySelector('.popup__button-close');

const templatePhoto = document.querySelector('#photo-template').content.querySelector('.grid-item');
const photosList = document.querySelector('.elements');
const titleInput = document.querySelector('.popup__profile_name_title');
const photoInput = document.querySelector('.popup__profile_name_photo');

const imagePopup = document.querySelector('.popup_type_image');
const imageCloseButton = imagePopup.querySelector('.popup__button-close');
const imageCard = imagePopup.querySelector('.popup__image');
const imageTitle = imagePopup.querySelector('.popup__title-card');

const overlayProfilePopup = document.querySelector('.popup__overlay_profile');
const overlayCardPopup = document.querySelector('.popup__overlay_card');
const overlayImagePopup = document.querySelector('.popup__overlay_image');

const validateConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__profile',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
  templateClass: '.photo-template',
};

//обработчик формы добавления новой карточки
function cardsSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы
    const cardTitleValue = titleInput.value;
    const cardPhotoValue = photoInput.value;
    addCard({ name: cardTitleValue,
    link: cardPhotoValue }); 
    closePopup(cardPopup);
    cardPopupForm.reset();
}

//создание новой карточки
function createCard(cardData) {
  const card = new Card(cardData, validateConfig.templateClass, revealPhoto);
  const cardsElement = card.generateCard();
  return cardsElement; //возвращается созданная карточка
};

  //обработка клика по картинке и открытие попапа карточки
  function revealPhoto (name, link) {
    imageTitle.textContent = name;
    imageCard.src = link;
    imageCard.alt = name;
    openPopup(imagePopup);
  };

//добавление новой карточки
function addCard (elem) {
  photosList.prepend(createCard(elem));
};

//заполнение карточек из массива
initialCards.forEach(cardData => {
    photosList.append(createCard(cardData));
 });

//открытие попапа
function openPopup(elem) {
  elem.classList.add('popup_opened');
  document.addEventListener("keydown", closePopupEsc);
};

//открытие попапа редактирования профиля
function openProfilePopup() {
  profileNameInput.value = profileName.textContent;
  profileJobInput.value = profileJob.textContent;
  openPopup(profilePopup);
};

//закрытие попапа
function closePopup(elem) {
  elem.classList.remove('popup_opened');
  document.removeEventListener("keydown", closePopupEsc);
};

//закрытие попапа Esc
function closePopupEsc(evt) {
  if (evt.key === "Escape") {
      const popup = document.querySelector('.popup_opened');
      closePopup(popup);
    }
}

//обработчик формы редактирования профиля
function handleProfileSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы
    profileName.textContent = profileNameInput.value;
    profileJob.textContent = profileJobInput.value; 
    closePopup(profilePopup);
};

const addFormValidator = new FormValidator (validateConfig, document.querySelector('.popup__form_card-add'));
addFormValidator.enableValidation();
const editFormValidator = new FormValidator (validateConfig, document.querySelector('.popup__form_edit-profile'));
editFormValidator.enableValidation();

profileEditButton.addEventListener('click',() => openProfilePopup(profilePopup));
cardAddButton.addEventListener('click',() => openPopup(cardPopup));

profileCloseButton.addEventListener('click',() => closePopup(profilePopup));
cardCloseButton.addEventListener('click',() => closePopup(cardPopup));
imageCloseButton.addEventListener('click',() => closePopup(imagePopup));

overlayProfilePopup.addEventListener("click", () => closePopup(profilePopup));
overlayCardPopup.addEventListener("click", () => closePopup(cardPopup));
overlayImagePopup.addEventListener("click", () => closePopup(imagePopup));

profilePopup.addEventListener('submit', handleProfileSubmit);
cardPopup.addEventListener('submit', cardsSubmitHandler);

