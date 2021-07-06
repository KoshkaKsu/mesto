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
            avatar: this._avatar.src,
            userId: this._id,
          };
        return userInfoValues;
    }

    setUserInfo(userInfoValues) {
        this._profileName.textContent = userInfoValues.name;
        this._profileJob.textContent = userInfoValues.job;
        //this._userID = userInfoValues._id;
        //this._avatar.src = userInfoValues.avatar;
    }

    setUserAvatar(newAvatarLink) {
        this._avatar.src = newAvatarLink;
    }
    
    getUserId() {
        return this._userID;
    }
}