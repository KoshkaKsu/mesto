  export class FormValidator {
    constructor(validateConfig, formElement) {
    this._validateConfig = validateConfig;
    this._formElement = formElement;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._validateConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._validateConfig.errorClass);
  };
  
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = '';
    inputElement.classList.remove(this._validateConfig.inputErrorClass);
    errorElement.classList.remove(this._validateConfig.errorClass);
  };
  
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };
  
  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._validateConfig.inputSelector));
    const buttonElement = this._formElement.querySelector(this._validateConfig.submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement, this._validateConfig.inactiveButtonClass);
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      buttonElement.setAttribute("disabled", true);
      buttonElement.classList.add(this._validateConfig.inactiveButtonClass);
    });
     
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input',() => {
        this._checkInputValidity(inputElement);
        // чтобы проверять его при изменении любого из полей
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }; 
  
  enableValidation() {
    this._formElement.addEventListener('submit', evt => evt.preventDefault());
    this._setEventListeners(this._formElement);
  }
    
  _toggleButtonState(inputList, buttonElement) {
    const isValid = inputList.some((inputElement) => !inputElement.validity.valid);
    if (isValid) {
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.add(this._validateConfig.inactiveButtonClass);
    } else {
        buttonElement.removeAttribute('disabled', true);
        buttonElement.classList.remove(this._validateConfig.inactiveButtonClass);
    }
  };
}