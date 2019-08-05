//TASK 1
console.log('\nTASK 1\n');
//Create two function-constructors Animal and Dog. Animal and Dog accept breed as parameter. 
//Create method getBreed on Animal prototype. Inherit Dog from Animal and call getBreed.
function Animal (breed) {
  this.breed = breed;
}

Animal.prototype.getBreed = function () {
  return this.breed;
}

function Dog(breed) {
  Animal.call(this, breed);
}

//Dog.prototype.getBreed = Animal.prototype.getBreed;
Dog.prototype = Object.create(Animal.prototype);

const haski = new Dog('haski');
console.log(haski.getBreed());

console.log(haski.constructor === Dog); //true
console.log(Dog.prototype.constructor === Dog ); //true
console.log(Dog.prototype); //Dog { getBreed: [Function] }
console.log(Dog.prototype.constructor);  //[Function: Dog]
console.log(Animal.prototype); //Animal { getBreed: [Function] }
console.log(Animal.prototype.constructor);  //[Function: Animal]
console.log(Dog.__proto__ === Animal.__proto__); //true //Function


//TASK 2
console.log('\nTASK 2\n');
//Take function-constructors from your first task and do the changes 
//if dog is invoked without new your function will return new instance anyway.

const pitBul = Dog('pitBull');
console.log(pitBul.getBreed()); 
console.log(pitBul instanceof Dog);


console.log(Animal.__proto__.__proto__.__proto__); //Function -> {} -> null
console.log(Animal.__proto__ === Function.prototype); //true
console.log(Animal.__proto__.__proto__ === Object.prototype); //true

console.log(Function.prototype.isPrototypeOf(Animal)); // true
console.log(Object.prototype.isPrototypeOf(Function)); // true

console.log(Animal instanceof Function); // true

//TASK 3
//Make a function which accept random amount of object and creates new one 
//which will inherit from those objects (if you log the object to console you will see the prototype chain).

// const temp1 = Object.create(obj1);
// const temp2 = Object.create(Object.assign(temp1, obj2));
// const bigFatObject = Object.create(Object.assign(temp2, obj3));

const obj1 = {
  sayHi: () => console.log('Hi!')
 };
 
 const obj2 = {
  showNumber: () => console.log(parseFloat(Math.random() * 100))
 };
 
 const obj3 = {
  showRandomSymbol: () => console.log(String.fromCharCode(parseFloat(Math.random() * 100)))
 };
 const bigFatObject = makeChain(obj1, obj2, obj3);
 
 console.log('​bigFatObject', bigFatObject);
 bigFatObject.sayHi();
 bigFatObject.showNumber();
 bigFatObject.showRandomSymbol();

//TASK 4
//Implement your own polyfill for Object.create method refer to MDN Object Create. 
//Please notice Object.create accepts second optional argument Syntax
Object.create = function(proto, syntax) {
  if (!Object.create) {

  }
}