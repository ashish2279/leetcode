// How do you find the largest and smallest number in an unsorted integer array? 
function findMinMax(arr) {
    let min = Number.MAX_VALUE
    let max  = Number.MIN_VALUE
    let n = arr.length
    
    for (let i=0;i<n;i++)
    {
        if(arr[i]<min)
            min = arr[i]
        if(arr[i]>max)
            max = arr[i]
    }
    return {min,max}
}

function main(){
    let arr = [-120 , 5, 9, -098, -65, 87888, 783657843, 7234623,0, 2]
  let {min, max} = findMinMax(arr)
  console.log("min : %j, max :%j",min,max)
}

main()
