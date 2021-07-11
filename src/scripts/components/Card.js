export default class Card {
    constructor({name, link, owner, _id, likes}, cardSelector,{revealPhoto, handleCardDelete, handleCardLike,
      handleCardDislike}, userId) {
      this._title = name;
      this._link = link;
      this._owner = owner._id;
      this._id = _id;
      this._cardSelector = cardSelector;
      this._element = this._getTemplate();
      this._revealPhoto = revealPhoto;
      this._handleCardDelete = handleCardDelete;
      this._handleCardDislike = handleCardDislike;
      this._handleCardLike = handleCardLike;
      this._likes = likes;
      this._cardsLike = ".grid-item__like";
      this._cardDelete = '.grid-item__delete';
      this._userId = userId;
    }
    
    _getTemplate() {
      const cardElement = document.querySelector(this._cardSelector).content.querySelector('.grid-item').cloneNode(true);
      return cardElement;
    }
  
    generateCard() { 
      this.likesCount();
      this._cardImage = this._element.querySelector('.grid-item__photo');
      this._cardName = this._element.querySelector('.grid-item__name');
      this._cardImage.src = this._link;
      this._cardImage.alt = this._title;
      this._cardName.textContent = this._title;
      if (this._userId === this._owner) {
        this._element.querySelector(this._cardDelete).classList.add('grid-item__delete_active');
      }
      this._likes.forEach((like) => {
        if (like._id === this._userId) {
            this._element.querySelector(this._cardsLike).classList.toggle("'grid-item__like_active");
            return;
        }
      })
      this._setEventListeners(); 
      return this._element;
    }
  
    _deleteCard() {
      this._handleCardDelete(this._id, this._element);
    }
  
    _likeCard() {
      this._handleCardLike(this._id);
      this._element.querySelector(this._cardsLike).classList.toggle('grid-item__like_active');
    }

    _dislikeCard() {
      this._handleCardDislike(this._id);
      this._element.querySelector(this._cardsLike).classList.toggle("grid-item__like_active");
    }
    
    likesCount() {
    this._element.querySelector('.grid-item__like-info').textContent = this._likes.length;
    }
    
    _setEventListeners() {
      this._cardImage.addEventListener('click', () => this._revealPhoto(this._title, this._link));
      const deleteImage = this._element.querySelector('.grid-item__delete');
      deleteImage.addEventListener('click', () => this._deleteCard());
      const cardsLike = this._element.querySelector('.grid-item__like');
      //cardsLike.addEventListener('click', () => this._handleCardLike(cardsLike));
      cardsLike.addEventListener('click', () => {
        const trigger = this._element.querySelector(this._cardsLike).classList.contains("grid-item__like_active");
        if (trigger) {
            this._dislikeCard();
        } else {
            this._likeCard();
        }
    });
    };
  };