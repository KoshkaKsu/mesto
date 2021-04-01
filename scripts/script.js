let popup = document.querySelector('.popup');
let popupForm = popup.querySelector('#popup-edit');
let popupEditOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__button-close');
let popupSaveButton = popup.querySelector('.popup__button-save');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let nameInput = popup.querySelector('.popup__profile_name_name');
let jobInput = popup.querySelector('.popup__profile_name_job');

let popupPlace = document.querySelector('.popup__place');
let popupAddButton = document.querySelector('.profile__add-button');
let photos = document.querySelector('.photos');
let namePlace = popupPlace.querySelector('.popup__profile_name_title');
let linkPlace = popupPlace.querySelector('.popup__profile_name_photo');
let popupAddCloseButton = popupPlace.querySelector('.popup__button-close');

let templatePhoto = document.querySelector('#photo-template').content.querySelector('.grid-item');
let photosList = document.querySelector('.elements');
let titleInput = document.querySelector('.popup__profile_name_title');
let photoInput = document.querySelector('.popup__profile_name_photo');

let popupCard = document.querySelector('.popup__card');
let popupCardCloseButton = popupCard.querySelector('.popup__button-close');
let popupCardImage = document.querySelector('.popup__image');
let popupCardTitle = document.querySelector('.popup__title-card');

const initialCards = [
    {
      name: "Неразлучники",
      link:
        "./images/lovebirds.jpg",
    },
    {
      name: "Ара",
      link:
        "./images/macaw.jpg",
    },
    {
      name: "Волнистый попугай",
      link:
        "./images/budgerigar.jpg",
    },
    {
      name: "Ожереловый",
      link:
        "./images/necklace.jpg",
    },
    {
      name: "Какаду",
      link:
        "./images/cockatoo.jpg",
    },
    {
      name: "Лори",
      link:
        "./images/lory.jpg",
    },
  ];

//заполнение карточек из массива
initialCards.forEach( elem => {
    let cardsElement = templatePhoto.cloneNode(true);

    cardsElement.querySelector('.grid-item__name').textContent = elem.name;
    cardsElement.querySelector('.grid-item__photo').src = elem.link;

    cardsElement.querySelector('.grid-item__like').addEventListener('click', function (evt) {
      evt.target.classList.toggle('grid-item__like_active');
    });

    let deleteCard = cardsElement.querySelector('.grid-item__delete');
    deleteCard.addEventListener('click', () => cardsElement.remove());

    function photoReveal (evt) {
      evt.preventDefault();
      popupCardTitle.textContent = elem.name;
      popupCardImage.src = elem.link;
      openCard();
    };

    cardsElement.querySelector('.grid-item__photo').addEventListener('click', photoReveal);

    photosList.append(cardsElement);
});

//открытие попапа редактирование профиля
function editOpenButton () {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    popup.classList.toggle('popup_opened');
}

//закрытие попапа редактирование профиля
function closeButton () {
  popup.classList.toggle('popup_opened');
}

//добавление новой карточки
function addCard () {
  namePlace.value = '';
  linkPlace.value = '';
  popupPlace.classList.add('popup_opened');
}

//закрытие попапа добавления новой карточки
function closeAddButton () {
  popupPlace.classList.toggle('popup_opened');
}

//открытие попапа с просмотром фото
function openCard () {
  popupCard.classList.add('popup_opened');
};

//закрытие попапа с просмотром фото
function closeCardButton () {
  popupCard.classList.remove('popup_opened');
}

//обработчик формы редактирования профиля
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value; 
    closeButton();
}


function cardsSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы
    let cardsElement = templatePhoto.cloneNode(true);
  
    cardsElement.querySelector('.grid-item__name').textContent = titleInput.value;
    cardsElement.querySelector('.grid-item__photo').src = photoInput.value;

    cardsElement.querySelector('.grid-item__like').addEventListener('click', function (evt) {
      evt.target.classList.toggle('grid-item__like_active');
    });

    let deleteCard = cardsElement.querySelector('.grid-item__delete');
    deleteCard.addEventListener('click', () => cardsElement.remove());

    function photoReveal (evt) {
      evt.preventDefault();
      popupCardTitle.textContent = titleInput.value;
      popupCardImage.src = photoInput.value;
      openCard();
    };

    cardsElement.querySelector('.grid-item__photo').addEventListener('click', photoReveal);

    closeAddButton();
    photosList.prepend(cardsElement);
}

popupEditOpenButton.addEventListener('click', editOpenButton);
popupCloseButton.addEventListener('click', closeButton);
popupAddButton.addEventListener('click', addCard);
popupAddCloseButton.addEventListener('click', closeAddButton);
popupCardCloseButton.addEventListener('click', closeCardButton);

popupForm.addEventListener('submit', formSubmitHandler);
popupPlace.addEventListener('submit', cardsSubmitHandler);