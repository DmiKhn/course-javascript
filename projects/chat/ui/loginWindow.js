export default class LoginWindow {
  constructor(elem, onLogin) {
    this.elem = elem;
    this.onLogin = onLogin;

    const loginInput = elem.querySelector('#login__nickname');
    const loginBtn = elem.querySelector('#login__button');
    const loginTitle = elem.querySelector('#login__title');

    loginBtn.addEventListener('click', () => {
      const name = loginInput.value.trim();

      if (!name) {
        loginTitle.textContent = 'Введите ваш ник';
      } else {
        // console.log('inserted Name');
        this.onLogin(name);
      }
    });
  }

  show() {
    this.elem.classList.remove('hidden');
  }

  hide() {
    this.elem.classList.add('hidden');
  }
}
