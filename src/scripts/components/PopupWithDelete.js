import Popup from "./Popup.js";
export class PopupWithDelete extends Popup {
    constructor(popupSelector, {submitHandler}) {
        super(popupSelector);
        this._submitHandler = submitHandler;
    }

    openPopup(cardId, element) {
        super.openPopup();
        this._cardId = cardId;
        this.cardElement = element;
    }

    setEventListeners() {
        super.setEventListeners();
        this.element.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitHandler(this._cardId);
        })
    }
}