function Animal (breed) {
    this.breed = breed;
}

Animal.prototype.getBreed = function () {
    return this.breed;
}

function Dog (breed) {
    if (!(this instanceof Dog)){
        return new Dog(breed);
    }
    Animal.call(this, breed);
}

Dog.prototype = Object.create(Animal.prototype);

const pitBul = Dog('pitBull');
console.log(pitBul instanceof Dog);
console.log(pitBul.getBreed());