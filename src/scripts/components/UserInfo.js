export default class UserInfo {
    constructor({ nameSelector, jobSelector, avatarSelector }) {
        this._profileName = document.querySelector(nameSelector);
        this._profileJob = document.querySelector(jobSelector);
        this._avatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        const userInfoValues = {
            name: this._profileName.textContent,
            job: this._profileJob.textContent,
            avatar: this._avatar,
            id: this._id,
          };
        return userInfoValues;
    }

    setUserInfo(userInfoValues) {
        this._profileName.textContent = userInfoValues.name;
        this._profileJob.textContent = userInfoValues.job;
        this._id = userInfoValues.id;
        this._avatar = userInfoValues.avatar;
    }

    setUserAvatar(newAvatarLink) {
        this._avatar = newAvatarLink;
    }  

    getUserId() {
        return this._id;
      }
}