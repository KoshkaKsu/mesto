import './index.css';
import Api from "../scripts/components/Api";
import Section from '../scripts/components/Section';
import PopupWithImage from '../scripts/components/PopupWithImage';
import PopupWithForm from '../scripts/components/PopupWithForm';
import {PopupWithDelete} from '../scripts/components/PopupWithDelete'
import Card from '../scripts/components/Card';
import FormValidator from '../scripts/components/FormValidator';
import UserInfo from '../scripts/components/UserInfo';

const profilePopup = document.querySelector('.popup_type_profile-edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileEditAvatarButton = document.querySelector('.profile__edit-button-avatar');
const profilePopupForm = document.querySelector('.popup__form_edit-profile');

const nameSelector = '.profile__name';
const jobSelector = '.profile__job';
const avatarSelector = '.profile__avatar'
const profileNameInput = profilePopup.querySelector('.popup__profile_name_name');
const profileJobInput = profilePopup.querySelector('.popup__profile_name_job');

const cardPopup = document.querySelector('.popup_type_card-add');
const cardPopupForm = cardPopup.querySelector('.popup__form_card-add');
const cardAddButton = document.querySelector('.profile__add-button');
const photosList = document.querySelector('.elements');

const userInfo = new UserInfo({nameSelector, jobSelector, avatarSelector});
const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

const popupEditForm = new PopupWithForm('.popup_type_profile-edit', (formInputs) => {
      api.editUserInfo(formInputs.name, formInputs.job)
          .then(result => {
              userInfo.setUserInfo(result.name, result.job);
              popupEditForm.closePopup();
          })
          .catch((err) => {
              console.log(err);
          })
  }
);
popupEditForm.setEventListeners();

const popupEditAvatar = new PopupWithForm('.popup_type_avatar-edit', (formData) => {
      api.updateAvatar(formData.link)
          .then((res) => {
              userInfo.setUserAvatar(res.avatar);
              popupEditAvatar.closePopup();
          })
          .catch((err) => {
              console.log(err);
          })
  }
)
popupEditAvatar.setEventListeners();

const popupCardForm = new PopupWithForm('.popup_type_card-add', (formInputs) => {
      api.addCard(formInputs.title, formInputs.link)
           .then(result => {
               const element = addCard(result)
               section.addItem(element, 'prepend');
            })
            .catch((err) => {
                console.log(err);
  })
       popupCardForm.closePopup();
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

const avatarPopup = document.querySelector('.popup_type_avatar-edit');
const avatarPopupForm = avatarPopup.querySelector('.popup__form_avatar-update');
const validatorAvatarUpload = new FormValidator (validateConfig, avatarPopupForm);
const addFormValidator = new FormValidator (validateConfig, cardPopupForm);
const editFormValidator = new FormValidator (validateConfig, profilePopupForm);

const api = new Api(`https://mesto.nomoreparties.co/v1/cohort-24`,'f12d97c5-3bd7-4a64-bc24-17e685180ee0');

//Получение инфорации по карточкам
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, item]) => {
    userInfo.setUserInfo({
      name: userData.name,
      job: userData.about,
      id: userData._id,
   });
    userInfo.setUserAvatar(userData.avatar);
    section.renderItems(item);
  })
  .catch(error => {
    console.log(`Ошибка при получении данных: ${error}`);
  })

// создание нового элемента карточки.
  const section = new Section({
    renderer: (item) => {
        const card = createCard(item);
        section.addItem(card, 'append');
    },
}, photosList);

function createCard(item) {
  const userId = userInfo.getUserId();
  const card = new Card(item, ".photo-template",
    {
     revealPhoto: (name,link) => {
     popupWithImage.openPopup({name,link});
    },
    handleCardDelete: (id, elem) => {
      deleteCardImage.openPopup(id, elem);
    },
    handleCardLike: (id) => {
      api.setLike(id)
          .then(({likes}) => {
              card._likes = likes;
              card.likesCount();
          })
          .catch((err) => {
              console.log(err);
          })
    },
    handleCardDislike: (id) => {
      api.unLike(id)
          .then(({likes}) => {
              card._likes = likes;
              card.likesCount();
          })
          .catch((err) => {
              console.log(err);
          })
  }
    }, userId)
  return card.generateCard();
}

const deleteCardImage = new PopupWithDelete('.popup_type_delete',(id) => {
      api.deleteCard(id)
          .then((data) => {
            deleteCardImage.cardElement.remove();
            deleteCardImage.closePopup();
          })
          .catch((err) => {
              console.log(err);
          })
  }
)
deleteCardImage.setEventListeners();

addFormValidator.enableValidation();
editFormValidator.enableValidation();
validatorAvatarUpload.enableValidation();

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

profileEditAvatarButton.addEventListener("click", (evt) => {
  //validatorAvatarUpload.resetValidation();
  popupEditAvatar.openPopup();
});










