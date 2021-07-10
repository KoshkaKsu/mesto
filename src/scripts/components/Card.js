export default class Card {
    constructor({name, link, owner, _id}, cardSelector,{revealPhoto, handleCardDelete, likeCard},userId) {
      this._title = name;
      this._link = link;
      this._owner = owner._id;
      this._id = _id;
      this._cardSelector = cardSelector;
      this._element = this._getTemplate();
      this._revealPhoto = revealPhoto;
      this._handleCardDelete = handleCardDelete;
      this._likeCard = likeCard;
      this._cardLike = ".grid-item__like";
      this._cardDelete = '.grid-item__delete';
      this._userId = userId;
    }
    
    _getTemplate() {
      const cardElement = document.querySelector(this._cardSelector).content.querySelector('.grid-item').cloneNode(true);
      return cardElement;
    }
  
    generateCard() { 
      this._cardImage = this._element.querySelector('.grid-item__photo');
      this._cardName = this._element.querySelector('.grid-item__name');
      this._cardImage.src = this._link;
      this._cardImage.alt = this._title;
      this._cardName.textContent = this._title;
      this._setEventListeners(); 
      /*if (this._userId === this._owner) {
        this._element.querySelector(this._cardDelete).classList.add('grid-item__delete_active');
    }*/
      return this._element;
    }
  
    _deleteCard() {
      this._handleCardDelete(this._id, this._element);
    }
  
    _cardsLike() {
      this._likeCard(this._id);
      this._element.querySelector(this._cardLike).classList.toggletoggle('grid-item__like_active');
    }
    
    _setEventListeners() {
      this._cardImage.addEventListener('click', () => this._revealPhoto(this._title, this._link));
      const deleteImage = this._element.querySelector('.grid-item__delete');
      deleteImage.addEventListener('click', () => this._deleteCard());
      const cardsLike = this._element.querySelector('.grid-item__like');
      cardsLike.addEventListener('click', () => this._likeCard(cardsLike));
    };
  };