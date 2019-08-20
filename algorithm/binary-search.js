
function binarySearch(arr, findNumber) {
    let middle = Math.floor(arr.length/2);

    if(arr[middle] === findNumber){
        return middle;
    }

    if(arr[middle] > findNumber){
        return binarySearch(arr.slice(0, middle), findNumber)
    }

    if(arr[middle] < findNumber){
        return middle + binarySearch(arr.slice(middle, arr.length), findNumber)
    }
}

let arr = [-10, 1, 20, 30, 44, 56, 79, 84]; 

console.log(`position of element -10 is (0): ${binarySearch(arr, -10)}`);
console.log(`position of element 20 is (2): ${binarySearch(arr, 20)}`);
console.log(`position of element 44 is (4): ${binarySearch(arr, 44)}`);
console.log(`position of element 56 is (5): ${binarySearch(arr, 56)}`);
console.log(`position of element 84 is (7): ${binarySearch(arr, 84)}`);