import Popup from "./Popup.js";
export default class PopupWithImage extends Popup  {
    constructor(popupSelector) {
       super(popupSelector);
       this._imageCard = this._popup.querySelector('.popup__image');
       this._imageTitle = this._popup.querySelector('.popup__title-card');
    }

    openPopup({name, link}) {
        super.openPopup();
        this._imageCard.src = link;
        this._imageCard.alt = name;
        this._imageTitle.textContent = name;
    }
}