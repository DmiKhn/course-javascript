export default class MessageSender {
  constructor(elem, onSend) {
    this.onSend = onSend;
    this.messageInput = elem.querySelector('#textarea');
    this.messageSendButton = elem.querySelector('#message');

    this.messageSendButton.addEventListener('click', () => {
      const message = this.messageInput.value.trim();

      if (message) {
        this.onSend(message);
      }
    });
  }

  clear() {
    this.messageInput.value = '';
  }
}
