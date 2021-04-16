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
const photos = document.querySelector('.photos');
const cardName = cardPopup.querySelector('.popup__profile_name_title');
const cardLink = cardPopup.querySelector('.popup__profile_name_photo');
const cardCloseButton = cardPopup.querySelector('.popup__button-close');

const templatePhoto = document.querySelector('#photo-template').content.querySelector('.grid-item');
const photosList = document.querySelector('.elements');
const titleInput = document.querySelector('.popup__profile_name_title');
const photoInput = document.querySelector('.popup__profile_name_photo');

const imagePopup = document.querySelector('.popup_type_image');
const imageCloseButton = imagePopup.querySelector('.popup__button-close');
const imageCard = imagePopup.querySelector('.popup__image');
const imageTitle = imagePopup.querySelector('.popup__title-card');

const overlayProfilePopup = document.querySelector('.popup_type_profile-overlay');
const overlayCardPopup = document.querySelector('.popup_type_card-overlay');
const overlayImagePopup = document.querySelector('.popup_type_image-overlay');

//обработчик формы добавления новой карточки
function cardsSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы
    const cardTitleValue = titleInput.value;
    const cardPhotoValue = photoInput.value;
    addCard({ name: cardTitleValue,
      link: cardPhotoValue });
      cardPopupForm.reset(); 
    closePopup(cardPopup);
}

//создание новой карточки
function createCard(cardData) {
  const cardsElement = templatePhoto.cloneNode(true);
  const cardsLike = cardsElement.querySelector('.grid-item__like');
  const cardsPhoto = cardsElement.querySelector('.grid-item__photo');

  cardsElement.querySelector('.grid-item__name').textContent = cardData.name;
  cardsPhoto.src = cardData.link;
  cardsPhoto.alt = cardData.name;

  //добавление и снятие лайков
  cardsLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('grid-item__like_active');
  });

  //удаление карточки
  const deleteCard = cardsElement.querySelector('.grid-item__delete');
  deleteCard.addEventListener('click', () => cardsElement.remove());
  
  //обработка клика по картинке и открытие попапа карточки
  function revealPhoto () {
    imageTitle.textContent = cardData.name;
    imageCard.src = cardData.link;
    imageCard.alt = cardData.name;
    openPopup(imagePopup);
  };
  cardsPhoto.addEventListener('click', revealPhoto);

  return cardsElement; //возвращается созданная карточка
};

//добавление новой карточки
function addCard (elem) {
  photosList.prepend(createCard(elem));
};

//заполнение карточек из массива
 initialCards.forEach(elem => {
    photosList.append(createCard(elem));
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
  document.addEventListener("keydown", closePopupEsc);
};

//закрытие попапа Esc
function closePopupEsc(evt) {
  const popup = document.querySelector('.popup_opened')
  if (evt.key === "Escape") {
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

