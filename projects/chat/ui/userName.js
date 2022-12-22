export default class UserName {
  constructor(elem) {
    this.elem = elem;
  }

  set(name) {
    this.name = name;
    this.elem.textContent = name;
  }

  get() {
    return this.name;
  }
}
