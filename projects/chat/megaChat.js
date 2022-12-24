import LoginWindow from './ui/loginWindow';
import MainWindow from './ui/mainWindow';
import UserName from './ui/userName';
import UserList from './ui/userList';
import MessageList from './ui/messageList';
import MessageSender from './ui/messageSender';
import UserPhoto from './ui/userPhoto';
import WSClient from './wsClient';

export default class MegaChat {
  constructor() {
    this.wsClient = new WSClient(
      // `ws://${location.host}/chat`,
      `ws://localhost:4000/chat`,
      this.onMessage.bind(this)
    );

    this.ui = {
      loginWindow: new LoginWindow(
        document.querySelector('#login-window'),
        this.onLogin.bind(this)
      ),
      mainWindow: new MainWindow(document.querySelector('#root')),
      userName: new UserName(document.querySelector('#user__name')),
      userList: new UserList(document.querySelector('#users__count')),
      messageList: new MessageList(document.querySelector('#contentarea__messages')),
      // connectedUsers: new ConnectedUsers(document.querySelector('#users__count')),
      messageSender: new MessageSender(
        document.querySelector('.contentarea__text-input'),
        this.onSend.bind(this)
      ),
      userPhoto: new UserPhoto(
        // document.querySelector('[data-role=user-photo]'),
        document.querySelector('.user__photo'),
        this.onUpload.bind(this)
      ),
    };
    this.ui.loginWindow.show();
  }

  onUpload(data) {
    this.ui.userPhoto.set(data);
    console.log(data);

    fetch('http://localhost:4000/chat/photos', {
      method: 'post',
      body: JSON.stringify({
        name: this.ui.userName.get(),
        image: data,
      }),
    });
  }

  onSend(message) {
    this.wsClient.sendTextMessage(message);
    this.ui.messageSender.clear();
  }

  async onLogin(name) {
    await this.wsClient.connect();
    this.wsClient.sendHello(name);
    this.ui.loginWindow.hide();
    this.ui.mainWindow.show();
    this.ui.userName.set(name);
    this.ui.userPhoto.set(`/chat/photos/${name}.png?t=${Date.now()}`);
    // console.log(name)
  }

  onMessage({ type, from, data }) {
    console.log(type, from, data);

    if (type === 'hello') {
      this.ui.userList.add(from);
      // document.querySelector('#users__count').innerHTML = `${this.ui.userList.sizeReturn()} участников`
      this.ui.messageList.addSystemMessage(`${from} вошел в чат`);
    } else if (type === 'user-list') {
      for (const item of data) {
        this.ui.userList.add(item);
      }
    } else if (type === 'bye-bye') {
      this.ui.userList.remove(from);
      this.ui.messageList.addSystemMessage(`${from} вышел из чата`);
    } else if (type === 'text-message') {
      this.ui.messageList.add(from, data.message);
    } else if (type === 'photo-changed') {
      const avatars = document.querySelectorAll(
        `[data-role=user-avatar][data-user=${data.name}]`
      );

      for (const avatar of avatars) {
        avatar.getElementsByClassName.backgroundImage = `url(/mega-chat/photos/${
          data.name
        }.png?t=${Date.now()})`;
      }
    }
  }
}
