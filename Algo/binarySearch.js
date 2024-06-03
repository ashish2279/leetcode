function search(arr, key) {
  if (arr.length === 0)
        return false;
 if (arr.length ===1 ) 
        return arr[0] === key;

 let mid = Math.floor(arr.length / 2);
 if (arr[mid] < key)
    return search(arr.slice(mid),key)
 else if(arr[mid] > key)
    return search(arr.slice(0,mid),key)

 else
    return true

}


function search2(arr, low,high, key) {
    if (high<low)
          return -1;
   if (low === high ) 
          return arr[low] === key ? low : -1;
  
   let mid = Math.floor((low + high)/ 2);
   if (arr[mid] < key)
      return search2(arr,mid+1,high,key)
   else if(arr[mid] > key)
      return search2(arr,low,mid-1,key)
  
   else
      return mid
  
  }

let arr = [1,2,3,4,5]

for(let ch of arr)
    console.log(search2(arr,0,arr.length-1,ch))

