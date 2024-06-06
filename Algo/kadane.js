function kadane(arr) {
let n = arr.length;
let maxSum = -Infinity;
let curr =0;
let startindex = 0,tempStart = 0;
let endIndex;
for (let i = 0 ; i< n;i++) {
    curr += arr[i];

    if(curr > maxSum) {
        maxSum = curr
        startindex = tempStart;
        endIndex = i;
    };

    if (curr <= 0)
        {curr = 0; tempStart = i+1}
}
return {maxSum,startindex,endIndex};

}


let arr = [ -2, -3, 4, -1, -2, 1, 5, -3 ]
console.log(" maxSum contigous subarray is : %j",kadane(arr))


