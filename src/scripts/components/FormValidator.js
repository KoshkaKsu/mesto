  export default class FormValidator {
    constructor(validateConfig, formElement) {
    this._validateConfig = validateConfig;
    this._formElement = formElement;
    this._inputList = Array.from(formElement.querySelectorAll(this._validateConfig.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._validateConfig.submitButtonSelector);
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._validateConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._validateConfig.errorClass);
  };
  
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._validateConfig.inputErrorClass);
    errorElement.classList.remove(this._validateConfig.errorClass);
    errorElement.textContent = "";
  };
  
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };
  
  _setEventListeners() {
    /*this._toggleButtonState();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._buttonElement.setAttribute("disabled", true);
      this._buttonElement.classList.add(this._validateConfig.inactiveButtonClass);
    });*/
    
     
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input",() => {
        this._checkInputValidity(inputElement);
        // чтобы проверять его при изменении любого из полей
        this._toggleButtonState();
      });
    });
  }; 

  enableValidation() {
   // this._formElement.addEventListener('submit', evt => evt.preventDefault());
   // this._setEventListeners(this._formElement);
   this._setEventListeners();
  }
    
  _toggleButtonState() {
    const isValid = this._inputList.some((inputElement) => !inputElement.validity.valid);
    if (isValid) {
      this._buttonElement.setAttribute('disabled', true);
      this._buttonElement.classList.add(this.inactiveButtonClass);
    } else {
        this._buttonElement.removeAttribute('disabled', true);
        this._buttonElement.classList.remove(this.inactiveButtonClass);
    }
  };

  resetValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._toggleButtonState();
  }
}