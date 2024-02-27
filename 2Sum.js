// find pair of given sum


function findPair(arr, sum)
{
   let f = -1,l =-1
   let n = arr.length          
   
   let myMap = new Map()
   for (let i=0;i<arr.length;i++)
   {
     if(myMap.get(arr[i]) || (myMap.get(arr[i]) === 0))
        {
            l = i;
            f=myMap.get(arr[i])
            return {f,l}
            
        }
    else{
        console.log("stroing  :%j at index %j", sum-arr[i],i)
        myMap.set(sum-arr[i],i)
    }
   }
   console.log([...myMap.entries()]);
   return {f,l}
}


function main()
{
    let arr = [2,4,5,6,3,4,1]
    let sum =5
    let {f,l} = findPair(arr, sum)
    console.log(f,l)
    if (f== -1)
        console.log("no pairs found")
        else
        console.log("pair is %j and pair :%j",arr[f],arr[l])
}

main()
