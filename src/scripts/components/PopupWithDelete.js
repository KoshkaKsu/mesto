import Popup from "./Popup.js";
export class PopupWithDelete extends Popup {
    constructor(popupSelector, {formSubmit}) {
        super(popupSelector);
        this._formSubmit = formSubmit;
    }

    openPopup(cardId, popup) {
        super.openPopup();
        this._cardId = cardId;
        this.cardElement = popup;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._formSubmit(this._cardId);
        })
    }
}