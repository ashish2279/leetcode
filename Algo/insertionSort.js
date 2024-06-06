// shift bigger elements to the right gets to the right position
// 112 ,11,163,5,6
// in first iteration since 112 is more than 11 it needs to shift to right 
//  _ , 112,163,5,6  now in palce of _ key will be placed 

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

let arr1 = [122, 11, 163, 5, 6];
console.log(insertionSort(arr1)); 