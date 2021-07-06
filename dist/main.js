(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e,this._token=n}var n,r;return n=t,(r=[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:{authorization:this._token}}).then(this._getResponseData)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:{authorization:this._token}}).then(this._getResponseData)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then(this._getResponseData)}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r,this._renderer=o,this._container=n}var t,r;return t=e,(r=[{key:"addItem",value:function(e){this._container.append(e)}},{key:"prependItem",value:function(e){this._container.prepend(e)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(){var e=this;this.clear(),this._initialArray.forEach((function(t){e._renderer(t)}))}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closePopupEsc=this._closePopupEsc.bind(this)}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._closePopupEsc)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._closePopupEsc)}},{key:"_closePopupEsc",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"_closePopupOverlay",value:function(e){e.target.classList.contains("popup__overlay")&&this.closePopup()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){e._closePopupOverlay(t)})),this._popup.querySelector(".popup__button-close").addEventListener("click",(function(){e.closePopup()}))}}])&&o(t.prototype,n),e}();function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._imageCard=t._popup.querySelector(".popup__image"),t._imageTitle=t._popup.querySelector(".popup__title-card"),t}return t=a,(n=[{key:"openPopup",value:function(e){var t=e.name,n=e.link;l(f(a.prototype),"openPopup",this).call(this),this._imageCard.src=n,this._imageCard.alt=t,this._imageTitle.textContent=t}}])&&u(t.prototype,n),a}(i);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._form=n._popup.querySelector(".popup__form"),n._inputList=n._popup.querySelectorAll(".popup__form-input"),n._submitForm=t,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;d(v(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){e._submitForm(e._getInputValues()),e.closePopup()}))}},{key:"closePopup",value:function(){d(v(a.prototype),"closePopup",this).call(this),this._form.reset()}}])&&_(t.prototype,n),a}(i);function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t,n,r){var o=r.revealPhoto;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=t.name,this._link=t.link,this._cardSelector=n,this._revealPhoto=o,this._element=this._getTemplate()}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".grid-item").cloneNode(!0)}},{key:"generateCard",value:function(){return this._cardImage=this._element.querySelector(".grid-item__photo"),this._cardName=this._element.querySelector(".grid-item__name"),this._cardImage.src=this._link,this._cardImage.alt=this._title,this._cardName.textContent=this._title,this._setEventListeners(),this._element}},{key:"_deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_likeCard",value:function(e){e.classList.toggle("grid-item__like_active")}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",(function(){return e._revealPhoto(e._title,e._link)})),this._element.querySelector(".grid-item__delete").addEventListener("click",(function(){return e._deleteCard()}));var t=this._element.querySelector(".grid-item__like");t.addEventListener("click",(function(){return e._likeCard(t)}))}}])&&g(t.prototype,n),e}();function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._validateConfig=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._validateConfig.inputSelector)),this._buttonElement=this._formElement.querySelector(this._validateConfig.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._validateConfig.inputErrorClass),n.textContent=t,n.classList.add(this._validateConfig.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));t.textContent="",e.classList.remove(this._validateConfig.inputErrorClass),t.classList.remove(this._validateConfig.errorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._buttonElement.setAttribute("disabled",!0),e._buttonElement.classList.add(e._validateConfig.inactiveButtonClass)})),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){return e.preventDefault()})),this._setEventListeners(this._formElement)}},{key:"_toggleButtonState",value:function(){this._inputList.some((function(e){return!e.validity.valid}))?(this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._validateConfig.inactiveButtonClass)):(this._buttonElement.removeAttribute("disabled",!0),this._buttonElement.classList.remove(this._validateConfig.inactiveButtonClass))}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}}])&&k(t.prototype,n),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t){var n=t.nameSelector,r=t.jobSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(n),this._profileJob=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,job:this._profileJob.textContent,avatar:this._avatar.src,userId:this._id}}},{key:"setUserInfo",value:function(e){this._profileName.textContent=e.name,this._profileJob.textContent=e.job}},{key:"setUserAvatar",value:function(e){this._avatar.src=e}},{key:"getUserId",value:function(){return this._userID}}])&&S(t.prototype,n),e}();function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x=document.querySelector(".popup_type_profile-edit"),j=document.querySelector(".profile__edit-button"),L=document.querySelector(".popup__form_edit-profile"),O=x.querySelector(".popup__profile_name_name"),I=x.querySelector(".popup__profile_name_job"),q=document.querySelector(".popup_type_card-add").querySelector(".popup__form_card-add"),B=document.querySelector(".profile__add-button"),A=document.querySelector(".elements"),D=new C({nameSelector:".profile__name",jobSelector:".profile__job",avatarSelector:".profile__avatar"}),R=new p(".popup_type_image");R.setEventListeners();var M=new b(".popup_type_profile-edit",(function(e){var t={name:e.name,job:e.job};D.setUserInfo(t)}));M.setEventListeners();var H=new b(".popup_type_card-add",(function(e){N.prependItem(W({link:e.link,name:e.title}))}));H.setEventListeners();var T={formSelector:".popup__form",inputSelector:".popup__profile",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active",templateClass:".photo-template"},V=new t("https://mesto.nomoreparties.co/v1/cohort-24","f12d97c5-3bd7-4a64-bc24-17e685180ee0"),G=new E(T,q);G.enableValidation();var U=new E(T,L);U.enableValidation();var N=new r({data:[{name:"Неразлучники",link:"https://images.unsplash.com/photo-1518001335271-e104dd5f03f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},{name:"Ара",link:"https://images.unsplash.com/photo-1544923408-75c5cef46f14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"},{name:"Волнистый попугай",link:"https://images.unsplash.com/photo-1593594351934-1948ae11ff56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"},{name:"Ожереловый",link:"https://images.unsplash.com/photo-1610724289216-7779a615a359?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=633&q=80"},{name:"Какаду",link:"https://images.unsplash.com/photo-1557350779-4f9afdd99bf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"},{name:"Лори",link:"https://images.unsplash.com/photo-1610724289216-7779a615a359?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=633&q=80"}],renderer:function(e){N.addItem(W(e))}},A);function W(e){return new w(e,".photo-template",{revealPhoto:function(e,t){R.openPopup({name:e,link:t})}}).generateCard()}N.renderItems(),j.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation();var t=D.getUserInfo();O.value=t.name,I.value=t.job,U.resetValidation(),M.openPopup()})),B.addEventListener("click",(function(e){q.reset(),e.preventDefault(),e.stopPropagation(),G.resetValidation(),H.openPopup()})),Promise.all([V.getUserInfo(),V.getInitialCards()]).then((function(e){var t,n,r=(t=e,n=1,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];D.setUserInfo({name:r.name,job:r.about,id:r._id}),N.renderItems(),D.setUserAvatar(r.avatar)})).catch((function(e){console.log("Ошибка при получении данных: ".concat(e))}))})();