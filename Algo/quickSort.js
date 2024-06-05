function partition (arr, low, high) {
    let pivot = arr [high];

    let i = low -1;
    
    for (let j=low ; j<high ;j++) {
        if(arr[j] < pivot) {
            i++;
            [arr[i],[arr[j]]] = [arr[j],[arr[i]]]
        }
    }
    i++;
    [arr[i],arr[high]] = [arr[high],arr[i]]
    return i;
}

function sort(arr, low, high) {
    if(low < high) {
        let pi = partition(arr,low,high);
        
        sort(arr, low, pi-1)
        sort(arr, pi +1 , high)   
    }
}




let arr = [1,5,2,6,9]
sort(arr, 0, arr.length-1)
console.log(arr)