const syntax = {
    key1: { writable: true, configurable: true, value: 'value1' },
    key2: { writable: true, configurable: true, value: 'value2' }
}

//1
Object.create = function(proto, syntax) {
    //if (!Object.create) {
        function Temp () {}
        Temp.prototype = proto;
        const result = new Temp();

        if(syntax) {
            Object.defineProperties(result, syntax);
        }

        return result;
    //}
}

const obj1 = Object.create({}, syntax);

console.log(obj1);
console.log(obj1.key1);

//2
Object.create = function(proto, syntax) {
    let Temp = function () {
        if(syntax) {
            Object.defineProperties(this, syntax);
        }
    }

    Temp.prototype = proto;
    return new Temp();
  }

const obj2 = Object.create({}, syntax);

console.log(obj2);
console.log(obj2.key2);