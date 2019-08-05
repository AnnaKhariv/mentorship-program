function makeChain() {

    const result = Object.values(arguments).reduce((accumulator, current, i)=> {

        return Object.create(Object.assign(accumulator, current));
    }, {});

   return result;
}

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