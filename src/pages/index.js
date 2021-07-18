import './index.css';
import {profileEditButton, profileEditAvatarButton, profilePopupForm, nameSelector, jobSelector, avatarSelector, profileNameInput,
profileJobInput, cardPopupForm, cardAddButton, photosList, avatarPopup, avatarPopupForm } from '../scripts/utils/constans.js';
import {validateConfig} from '../scripts/utils/constans.js';
import Api from "../scripts/components/Api";
import Section from '../scripts/components/Section';
import PopupWithImage from '../scripts/components/PopupWithImage';
import PopupWithForm from '../scripts/components/PopupWithForm';
import {PopupWithDelete} from '../scripts/components/PopupWithDelete'
import Card from '../scripts/components/Card';
import FormValidator from '../scripts/components/FormValidator';
import UserInfo from '../scripts/components/UserInfo';

const userInfo = new UserInfo({nameSelector, jobSelector, avatarSelector});
const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

const api = new Api(`https://mesto.nomoreparties.co/v1/cohort-24`,'f12d97c5-3bd7-4a64-bc24-17e685180ee0');

// создание нового элемента карточки.
const section = new Section({
  renderer: (item) => {
      const card = createCard(item);
      section.addItem(card);
  },
}, photosList);

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
  

const popupEditForm = new PopupWithForm('.popup_type_profile-edit', (formInputs) => {
      popupEditForm.renderLoading(true);
      api.editUserInfo(formInputs)
          .then((formInputs) => {
              userInfo.setUserInfo({
                name: formInputs.name,
                job: formInputs.about,
              });
              popupEditForm.closePopup();
          })
          .catch((err) => {
              console.log(err);
          })
          .finally(() => {
            popupEditForm.renderLoading(false)
          })
  }
);
popupEditForm.setEventListeners();

const popupEditAvatar = new PopupWithForm('.popup_type_avatar-edit', (formData) => {
      popupEditAvatar.renderLoading(true);
      api.updateAvatar(formData.link)
          .then((res) => {
              userInfo.setUserAvatar(res.avatar);
              popupEditAvatar.closePopup();
          })
          .catch((err) => {
              console.log(err);
          })
          .finally(() => {
            popupEditAvatar.renderLoading(false)
          })
  }
)
popupEditAvatar.setEventListeners();

const popupCardForm = new PopupWithForm('.popup_type_card-add', (formInputs) => {
  popupCardForm.renderLoading(true);
  api.addCard(formInputs.title, formInputs.link)
       .then(formInputs => {
           const element = createCard(formInputs)
           section.prependItem(element);
           popupCardForm.closePopup();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
          popupCardForm.renderLoading(false)
        })
})
popupCardForm.setEventListeners();

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

const validatorAvatarUpload = new FormValidator (validateConfig, avatarPopupForm);
const addFormValidator = new FormValidator (validateConfig, cardPopupForm);
const editFormValidator = new FormValidator (validateConfig, profilePopupForm);

addFormValidator.enableValidation();
editFormValidator.enableValidation();
validatorAvatarUpload.enableValidation();

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
              card.likes = likes;
              card.likesCount();
          })
          .catch((err) => {
              console.log(err);
          })
    },
    handleCardDislike: (id) => {
      api.unLike(id)
          .then(({likes}) => {
              card.likes = likes;
              card.likesCount();
          })
          .catch((err) => {
              console.log(err);
          })
  }
    }, userId)
  return card.generateCard();
}

profileEditButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  evt.stopPropagation();
  const profileInfo = userInfo.getUserInfo(); 
  profileNameInput.value = profileInfo.name;
  profileJobInput.value = profileInfo.job;
  editFormValidator.clearInputErrors();
  editFormValidator.resetValidation();
  popupEditForm.openPopup();
});

cardAddButton.addEventListener("click", (evt) => {
  evt.preventDefault()
  evt.stopPropagation()
  addFormValidator.clearInputErrors();
  addFormValidator.resetValidation();
  popupCardForm.openPopup();
});

profileEditAvatarButton.addEventListener("click", () => {
  validatorAvatarUpload.clearInputErrors();
  validatorAvatarUpload.resetValidation();
  popupEditAvatar.openPopup();
});










