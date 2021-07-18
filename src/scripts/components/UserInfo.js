export default class UserInfo {
    constructor({nameSelector, jobSelector, avatarSelector})  {
        this._profileName = document.querySelector(nameSelector);
        this._profileJob = document.querySelector(jobSelector);
        this._avatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        const userInfoValues = {
            name: this._profileName.textContent,
            job: this._profileJob.textContent,
            userId: this._id,
          };
        return userInfoValues;
    }

    setUserInfo(obj) {
        this._profileName.textContent = obj.name;
        this._profileJob.textContent = obj.job;
        this._id = obj.id;
    }

    setUserAvatar(newAvatarLink) {
        this._avatar.src = newAvatarLink;
    }  

    getUserId() {
        return this._id;
      }
}