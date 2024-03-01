function swap(a, b) {
  return [b, a];
}

function partition(arr, low , high) {
    let i=low-1;
  let pivot = arr[high]
    for(let j=low;j<=high;j++)
    {
        if(arr[j]< pivot) {
            i++;
            [arr[i],arr[j]] = swap(arr[i],arr[j])
        }
        
    }
    
    [arr[i+1],arr[high]] = swap(arr[i+1],arr[high])
    
    return i+1;
    
}

function sort (arr,low , high) {
    if (low < high)
    {
    let pi = partition(arr, low ,high)
    sort(arr,low,pi-1)
    sort(arr, pi+1,high)
        
    }
}



function main () {
    let arr =  [1,2,7,5,4,0.-1]
    
    sort(arr, 0, arr.length-1)
    
    
    for (let i=0;i<arr.length ; i++)
    {
        console.log(" %j," ,arr[i])
    }
}

main()
