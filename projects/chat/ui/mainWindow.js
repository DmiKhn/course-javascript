export default class MainWindow {
  constructor(elem) {
    this.elem = elem;
  }

  show() {
    this.elem.classList.remove('hidden');
  }

  hide() {
    this.elem.classList.add('hidden');
  }
}
