/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


var firstNegtiveNumber = function(nums, k) {
    const n = nums.length;

    let i =0;
    let q= [];
    let ans = []
    while(i<k) {
        if(nums[i] < 0) {
            q.push(nums[i]);
        }
        i++;
    }

    for(let right = 0; right + k -1 <n;right++) {
        if(q.length) {
            ans.push(q[0])
        } else {
            ans.push(0);
        }

        if(nums[right] < 0) {
            q.shift();
        }
        if(nums[right + k] < 0) {
            q.push(nums[right + k]);
        }
    }
    
    return ans; 
};



nums = [12, 8, 123,9, 9, 12, 7,8,0,-13,1,-2];
k = 11;
console.log(firstNegtiveNumber(nums, k));  // Expected output: 999999999
