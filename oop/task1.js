function Animal (breed) {
  this.breed = breed;
}

Animal.prototype.getBreed = function () {
  return this.breed;
}

function Dog(breed) {
  Animal.call(this, breed);
}

Dog.prototype.getBreed = Animal.prototype.getBreed;

const haski = new Dog('haski');
console.log(haski.getBreed());