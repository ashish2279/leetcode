function BinarySearch(arr, k)
{
    
    let n=arr.length;
    let i=0;
    let j=n-1;
 
 
    while(i<=j) {
        let mid = Math.floor((i+j)/2)
        if(arr[mid] > k) 
            j=mid;
        else if(arr[mid] === k)
            return mid
        else
            i=mid+1
            
    }
    
    return -1;
}


function main() 
{
    let arr = [1,4,5,6,7,8,9]
    let k = 9
    
    console.log(" element found at index : %j",BinarySearch(arr,k))
}

main()
