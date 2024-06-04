function mergeSort(arr, low, high) {
    if (low >= high) {
        return;
    }

    let mid = Math.floor((low + high) / 2);

    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);

    merge(arr, low, mid, high);
}

function merge(arr, low, mid, high) {
    let n1 = mid - low + 1;
    let n2 = high - mid; //(high - (mid +1) +1)

    let left = new Array(n1);
    let right = new Array(n2);

    for (let i = 0; i < n1; i++) {
        left[i] = arr[low + i];
    }
    for (let j = 0; j < n2; j++) {
        right[j] = arr[mid + 1 + j];
    }

    let i = 0, j = 0, k = low;
    while (i < n1 && j < n2) {
        if (left[i] <= right[j]) {
            arr[k++] = left[i];
            i++;
        } else {
            arr[k++] = right[j];
            j++;
        }
    }

    while (i < n1) {
        arr[k++] = left[i++];
    }

    while (j < n2) {
        arr[k++] = right[j++];
    }
}

// Example usage
let arr = [12, 11, 13, 5, 6, 7];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);

