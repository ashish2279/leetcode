 function findRepeatedElement (arr) {
    let n  = arr.length
    let myMap = new Map()
    let ans = []
    for (let i=0;i<n;i++)
    {
        if(myMap.get(arr[i]))
            ans.push(arr[i])
        else
            myMap.set(arr[i], '1')
        
    }
    
    return ans;
}

function main () {
    let arr = [1,2,3,4,4,5,1]
    console.log("reapted ELEMENTS ",findRepeatedElement(arr))
}

main()
