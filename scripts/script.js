let popup = document.querySelector('.popup');
let popupForm = popup.querySelector('.popup__container');
let popupPlace = document.querySelector('.popup__place');
let popupEditOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__button-close');
let popupSaveButton = popup.querySelector('.popup__button-save');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let nameInput = popup.querySelector('.popup__profile_name_name');
let jobInput = popup.querySelector('.popup__profile_name_job');

let popupAddButton = document.querySelector('.profile__add-button');
let photos = document.querySelector('.photos');
let namePlace = popupPlace.querySelector('.popup__profile_name_title');
let linkPlace = popupPlace.querySelector('.popup__profile_name_photo');
let popupAddCloseButton = popupPlace.querySelector('.popup__button-close');

let templatePhoto = document.querySelector('#photo-template').content.querySelector('.grid-item');
let photosList = document.querySelector('.elements');

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

initialCards.forEach( elem => {
    let cardsElement = templatePhoto.cloneNode(true);

    cardsElement.querySelector('.grid-item__name').textContent = elem.name;
    cardsElement.querySelector('.grid-item__photo').src = elem.link;

    cardsElement.querySelector('.grid-item__like').addEventListener('click', function (event) {
      event.target.classList.toggle('grid-item__like_active');
    });

    photosList.append(cardsElement);
});

function editOpenButton () {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    popup.classList.toggle('popup_opened');
}

function closeButton () {
    popup.classList.toggle('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value; 
    closeButton();
}

function addCard () {
    namePlace.value = '';
    linkPlace.value = '';
    popupPlace.classList.add('popup_opened');
}

function closeAddButton () {
    popupPlace.classList.toggle('popup_opened');
}

popupEditOpenButton.addEventListener('click', editOpenButton);
popupCloseButton.addEventListener('click', closeButton);
popupForm.addEventListener('submit', formSubmitHandler);
popupAddButton.addEventListener('click', addCard);
popupAddCloseButton.addEventListener('click', closeAddButton);