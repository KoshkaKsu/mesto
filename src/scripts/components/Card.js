export default class Card {
    constructor({name, link, owner, _id, likes}, cardSelector,{revealPhoto, handleCardDelete, handleCardLike,
      handleCardDislike}, userId) {
      this._templateElement = document.querySelector(cardSelector);
      this._title = name;
      this._link = link;
      this._owner = owner;
      this._id = _id;
      this._likes = likes;
      this._cardSelector = cardSelector;
      this._element = this._getTemplate();
      this._revealPhoto = revealPhoto;
      this._handleCardDelete = handleCardDelete;
      this._handleCardDislike = handleCardDislike;
      this._handleCardLike = handleCardLike;
      this._cardsLike = '.grid-item__like';
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
      this._setEventListeners(); 
      if (this._userId === this._owner._id) {
         this._element.querySelector(this._cardDelete).classList.add('grid-item__delete_active');
      }
      if (this.isLiked()) {
        // сделать иконку активной
        this._element.querySelector(this._cardsLike).classList.add('grid-item__like_active'); // тогда черным
      }
      /*this._likes.forEach((like) => {
        if (like._id === this._userId) {
            this._element.querySelector(this._cardsLike).classList.toggle("'grid-item__like_active");
            return;
        }
      })*/
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

    isLiked() {
      let hasLike = false;
      // проходимся по каждому лайкнувшему карточку
      this._likes.forEach(likedUser => {
        let valuesArr = Object.values(likedUser)
        // если содержит АйДи пользователя
        if (valuesArr.includes(this._userId)) {
          // значит карточка уже лайканая
          hasLike = true;
        }
      })
      return hasLike;
    }
    
    _setEventListeners() {
      this._cardImage.addEventListener('click', () => this._revealPhoto(this._title, this._link));
      const deleteImage = this._element.querySelector('.grid-item__delete');
      deleteImage.addEventListener('click', () => this._deleteCard());
      const cardsLike = this._element.querySelector(this._cardsLike);
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