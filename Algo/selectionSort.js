// find minimum element in iteration and start filling it from 0th index
// basically kth minimum at index k
function Sort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        console.log(`swapping ${arr[i]} to ${arr[minIndex]}`)
    }
    return arr;
}

let arr2 = [3,8,7,6,9,0];
console.log( Sort(arr2)); 
