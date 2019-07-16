
class User {
    constructor(login, message = null) {
        this._login = login;
        this._message = message;
    }

    get nickname() {
        return this._login;
    }

    set message(message) {
        this._message = message;
    }

    sendMessage() {
        return `User '${this.nickname}' says:  '${this._message}'`;
    }
}

const admin = new User('admin');
const user_1 = new User('user_1');
const user_2 = new User('user_2');

class Messenger {

    constructor() {
        this._subscribers = [];
    }

    subscribe(subscriber) {
        this._subscribers.push(subscriber);
        console.log(`User ${subscriber.nickname} entered chatroom`);
    }

    unsubscribe(subscriber) {
        this._subscribers.splice(this._subscribers.indexOf(subscriber), 1);
        console.log(`User ${subscriber.nickname} left chatroom`);
    }

    notify(message, sender) {
        this._subscribers.forEach(subscriber => {
            if (subscriber === sender) {
                console.log(message);
            } else {
                console.log(subscriber.nickname + " read message");
            }

        })
    }

}


const groupChat = new Messenger();

groupChat.subscribe(admin);
groupChat.subscribe(user_1);
groupChat.subscribe(user_2);
admin.message = 'Hello, all!';
const message_1 = admin.sendMessage();
groupChat.notify(message_1, admin)

groupChat.unsubscribe(user_2);
admin.message = 'Have a nice day!';
const message_2 = admin.sendMessage();
groupChat.notify(message_2, admin)


