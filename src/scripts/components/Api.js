export default class Api {
    constructor(addres, token) {
        this._url = addres;
        this._token = token;
    }

_getResponseData(res) {
    if(!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

//Загрузка информации о пользователе с сервера
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
      .then(this._getResponseData);
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
      .then(this._getResponseData);
  }

  updateAvatar(newAvatarLink) {
    return fetch(`${this._url}/users/me/avatar`, {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          avatar: newAvatarLink,
        })
    })
        .then(this._getResponseData)
  }

  editUserInfo(obj) {
    return fetch(`${this._url}/users/me`, {
        method: "PATCH",
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: obj.name,
            about: obj.job
        })
    })
        .then(this._getResponseData);
}

addCard(name, link) {
  return fetch(`${this._url}/cards`, {
    method: 'POST',
    headers: {
      authorization: this._token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      link: link
  })
})
  .then(this._getResponseData);
}

  setLike(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: 'PUT',
      headers: {
        authorization: this._token
      }
    })
    .then(this._getResponseData);
  }

  unLike(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
    .then(this._getResponseData);
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
        method: "DELETE",
        headers: {
          authorization: this._token
        }
    })
    .then(this._getResponseData);
  }
}