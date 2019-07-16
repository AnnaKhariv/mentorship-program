class User {
    constructor(name, genre = null) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    recommend(genre) {
        return `User '${this.name}' recommend  '${genre}' movies`;
    }
}

class Mediator {

    constructor() {
        this._genres = ['action', 'adventure', 'comedy', 'horror'];
        this._fans = {};

        this._genres.forEach(genre => {
            this._fans[genre] = [];
        });
    }

    addGenre(genre) {
        this._genres.push(genre);
        this._fans[genre] = [];
    }

    subscribe(fan, type) {
        this._genres.forEach(genre => {
            if (genre === type) {
                this._fans[genre].push(fan);
                console.log(`User ${fan.name} loves ${genre} movies`);
            }
        })
    }

    unsubscribe(fan, genre) {
        console.log();
        this._fans[genre].splice(this._fans[genre].indexOf(fan), 1);
        console.log(`User ${fan.name} disapointed in ${genre} movies`);
    }

    notify(message, sender, genre) {
        this._fans[genre].forEach(fan => {
            if (fan === sender) {
                console.log(message);
            } else {
                console.log(fan.name + " will watch that movie");
            }

        })
    }
}


const user_1 = new User('user_1');
const user_2 = new User('user_2');
const user_3 = new User('user_3');
const user_4 = new User('user_4');

const mediator = new Mediator();

mediator.subscribe(user_1, 'action');
mediator.subscribe(user_2, 'action');
mediator.subscribe(user_2, 'horror');
mediator.subscribe(user_3, 'horror');
mediator.subscribe(user_4, 'horror');

const message_1 = user_1.recommend('action');
mediator.notify(message_1, user_1, 'action');

const message_2 = user_2.recommend('horror');
mediator.notify(message_2, user_2, 'horror');

mediator.unsubscribe(user_2, 'horror');

const message_3 = user_3.recommend('horror');
mediator.notify(message_3, user_3, 'horror');