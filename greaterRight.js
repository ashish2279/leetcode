/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let right_max  = -1;
    let n  =  arr.length;
    let ele = []
    for (let i=n-1;i>=0;i--)
    {
        
        temp = right_max
        if(arr[i] > right_max)
            {
                right_max = arr[i] 
                ele.push(right_max)

            }
        arr[i] = temp
    }
    
    arr[n-1]  = -1
    console.log(ele)
    return arr
};


let arr = [5,4,3,2,1]
console.log("replacedElements",replaceElements(arr))