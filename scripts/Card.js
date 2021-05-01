export class Card {
    constructor(data, cardSelector, revealPhoto) {
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
      this._revealPhoto = revealPhoto;
      this._element = this._getTemplate();
      this._cardsPhoto = this._getTemplate().querySelector('.grid-item__photo');
    }
    
    _getTemplate() {
      const cardElement = document.querySelector(this._cardSelector).content.querySelector('.grid-item').cloneNode(true);
      return cardElement;
    }
  
    generateCard() {
      this._setEventListeners();  
      this._element.querySelector('.grid-item__photo').src = this._link;
      this._element.querySelector('.grid-item__photo').alt = this._name;
      this._element.querySelector('.grid-item__name').textContent = this._name;
  
      return this._element;
    }
  
    _deleteCard() {
      this._element.remove();
    }
  
    _likeCard(cardsLike) {
      cardsLike.classList.toggle('grid-item__like_active');
    }
    
    _setEventListeners() {
      this._element.querySelector('.grid-item__photo').addEventListener('click', () => this._revealPhoto(this._name, this._link));
      const deleteCard = this._element.querySelector('.grid-item__delete');
      deleteCard.addEventListener('click', () => this._deleteCard());
      const cardsLike = this._element.querySelector('.grid-item__like');
      cardsLike.addEventListener('click', () => this._likeCard(cardsLike));
    };
  };