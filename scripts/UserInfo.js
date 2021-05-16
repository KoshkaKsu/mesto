export default class UserInfo {
    constructor({ nameSelector, jobSelector }) {
        this._profileName = document.querySelector(nameSelector);
        this._profileJob = document.querySelector(jobSelector);
    }

    getUserInfo() {
        const userInfoValues = {
            name: this._profileName.textContent,
            job: this._profileJob.textContent
          };
        return userInfoValues;
    }

    setUserInfo(userInfoValues) {
        this._profileName.textContent = userInfoValues.name;
        this._profileJob.textContent = userInfoValues.job;
    }
}