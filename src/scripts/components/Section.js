export default class Section {
    constructor({renderer}, containerSelector) {
      this._renderer = renderer;
      this._container = containerSelector;
    }

    addItem(item) {
        this._container.append(item);
    }

    prependItem(item) {
      this._container.prepend(item);
    }

    clear() {
        this._container.innerHTML = '';
    }

    renderItems(data) {
      //this.clear();
      data.forEach(item => {
        this._renderer(item);
      });
    }
  } 