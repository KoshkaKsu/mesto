import Popup from "./Popup.js";
export default class PopupWithForm extends Popup  {
    constructor(popupSelector, submitForm) {
            super(popupSelector);
            this._form = this._popup.querySelector(".popup__form");
            this._inputList = this._form.querySelectorAll('.popup__form-input');
            this._submitForm = submitForm; 
            this._prevTextBtn = this._popup.querySelector('.popup__button-save').textContent;
            this._btnSave = this._popup.querySelector('.popup__button-save');
    }   
        renderLoading(isLoading, loadingText) {
            if(isLoading) {
                this._btnSave.textContent = loadingText;
            } else 
              {
                this._btnSave.textContent = this._prevTextBtn;
            }   
    }
        _getInputValues() {
            this._formValues = {};
            this._inputList.forEach(input => {
                this._formValues[input.name] = input.value;
            });
            return this._formValues;        
        }
        setEventListeners() {  
            super.setEventListeners();  
            this._form.addEventListener('submit', (evt) => {
                evt.preventDefault();
                this._submitForm(this._getInputValues());
              });
        }
        closePopup() {
            super.closePopup();
            this._form.reset();
        }
}