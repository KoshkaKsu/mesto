import Popup from "./Popup.js";
export class PopupWithDelete extends Popup {
    constructor(popupSelector, formSubmit) {
        super(popupSelector);
        this._formSubmit = formSubmit;
    }

    openPopup(id, popup) {
        super.openPopup();
        this._id = id;
        this.cardElement = popup;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._formSubmit(this._id);
        })
    }
}