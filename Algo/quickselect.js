function partition (arr, low, high) {
    let pivot =arr[high];
    let i = low -1;

    for (let j = low ;j< high;j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i],arr[j]] = [arr[j],arr[i]]
        }
    }
    i++;
    [arr[high],arr[i]] = [arr[i],arr[high]]
    return i;
}



function findKthsmallest(arr, low, high, k) {
    if (low <=high) {
        let pivotIndex = partition(arr,low,high) 

        if (pivotIndex == k-1)
            return arr[pivotIndex];

        else if (pivotIndex < k-1) {
            return findKthsmallest(arr, pivotIndex+1, high, k)
        }
        else
        return findKthsmallest(arr, low, pivotIndex-1,k)
    }
}
function findKthsmallestElement(arr, k) {
    if (k < 1 || k > arr.length) {
        return null; // Handle out of bounds
    }
    return findKthsmallest(arr, 0, arr.length - 1, k);
}

let arr = [1,4,5,8,3,7,9,2,6];
let n = arr.length;

for(let i=1;i<=10;i++)
    {console.log(` ${i}th smallest element is :%j ` , findKthsmallestElement(arr, i));}