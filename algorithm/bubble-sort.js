function bubleSort (arr) {
    let isSorted = false;
    let last = arr.length - 1;

    do {
        isSorted = true;
        for (let i = 0; i < last; i++) {
            if (arr[i] > arr[i + 1]) {
                isSorted = false;
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
            count++;
        }
        last--;
    } while (!isSorted);

    return arr;
}
    
let arr = [1, 7, 5, 2, 0, 9, -9, 100, -4, 36]; 
console.log(bubleSort(arr))





