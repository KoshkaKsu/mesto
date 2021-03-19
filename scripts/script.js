let popup = document.querySelector('.popup');
let popupForm = popup.querySelector('.popup__container');
let popupEditOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__button-close');
let popupSaveButton = popup.querySelector('.popup__button-save');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let nameInput = popup.querySelector('.popup__profile_name_name');
let jobInput = popup.querySelector('.popup__profile_name_job');

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

popupEditOpenButton.addEventListener('click', editOpenButton);
popupCloseButton.addEventListener('click', closeButton);
popupForm.addEventListener('submit', formSubmitHandler);

