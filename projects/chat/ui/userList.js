export default class userList {
  constructor(elem) {
    this.elem = elem;
    this.items = new Set();
  }

  buildDOM() {
    const fragment = document.createDocumentFragment();

    this.elem.innerHTML = '';

    for (const name of this.items) {
      const element = document.createElement('div');
      element.classList.add('user-list-item');
      element.textContent = name;
      fragment.append(element);
    }

    this.elem.append(fragment);
  }

  add(name) {
    this.items.add(name);
    this.buildDOM();
    this.countUsers();
  }

  countUsers() {
    const countPlace = document.querySelector('#top-bar__usercount');
    if (this.items.size > 1) {
      countPlace.textContent = `${this.items.size} участников`;
    } else {
      countPlace.textContent = `${this.items.size} участник`;
    }
  }

  remove(name) {
    this.items.delete(name);
    this.buildDOM();
  }

  sizeReturn() {
    return this.items.size();
  }
}
