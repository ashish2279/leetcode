function findPivot(arr, low, high) {
    if (high < low) return -1;
    if (high == low) return low;

    let mid = Math.floor((low + high) / 2);

    if (arr[mid - 1] > arr[mid]) return mid;
    if (arr[mid] > arr[mid + 1]) return mid+1;

    if (arr[low] >= arr[mid]) return findPivot(arr, low, mid - 1);
    
    return findPivot(arr, mid + 1, high);
}


function BinarySearch(arr,low,high,target)
{
    if(low>high)
    return -1;
    
    
    let mid = Math.floor((low+high)/2)
    
    if(arr[mid] == target)
    return mid;
    
    if(arr[mid]>=target)
        return BinarySearch(arr,low,mid-1,target)
    
    return BinarySearch(arr,mid+1,high,target)
}
 

function rotatedSearch(arr,target) {
    let pivot = findPivot(arr,0,arr.length-1)
    
    
    console.log("pivot : %j",pivot)
    if (pivot === -1)
        return BinarySearch(arr,0,arr.length-1,target)
        
    if(target > arr[arr.length-1])
        return  BinarySearch(arr,0,pivot-1,target)
    else
       return BinarySearch(arr,pivot,arr.length-1,target)

}

function main()
{
    let arr = [5,6,0,1,2,3]
    
    let target = 3
    
    for (let char of arr)
        console.log(rotatedSearch(arr,char+1))
}


main()
