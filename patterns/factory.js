class Cats {
    constructor(breed) {
        this._breed = breed;
    }

    get breed() {
        return this._breed;
    }

    get coat() {
        return this._coat;
    }
}

class Manx extends Cats {
    constructor(...arg) {
        super(...arg);
        this._coat = 'medium';
    }
}
class Persian extends Cats {
    constructor(...arg) {
        super(...arg);
        this._coat = 'long';
    }
}
class Siamese extends Cats {
    constructor(...arg) {
        super(...arg);
        this._coat = 'short';
    }
}

class Factory {
    createCat(breed) {
        switch (breed) {
            case 'manx': return new Manx(breed);
            case 'persian': return new Persian(breed);
            case 'siamese': return new Siamese(breed);
            default: throw Error(`${breed} type not found`);
        }
    }
}

const factory = new Factory();

const kitten_1 = factory.createCat('manx');
console.log(`Breed: ${kitten_1.breed}, coat: ${kitten_1.coat}`);
console.log(kitten_1 instanceof Manx);
console.log(kitten_1 instanceof Cats);

const kitten_2 = factory.createCat('persian');
console.log(`Breed: ${kitten_2.breed}, coat: ${kitten_2.coat}`);
console.log(kitten_2 instanceof Persian);

const kitten_3 = factory.createCat('siamese');
console.log(`Breed: ${kitten_3.breed}, coat: ${kitten_3.coat}`);


