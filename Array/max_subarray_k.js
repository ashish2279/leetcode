/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


var maximumSubarraySum = function(nums, k) {
    const n = nums.length;

    let  ans = Number.MIN_SAFE_INTEGER;
    if(n<k) {
        return 0;
    }

    let left = 0;
   
    let current_sum = 0;
    for(let i=0;i<k;i++) {
        current_sum += nums[i];  

    }
    ans = current_sum;
    let right = k;
    while(right < n) {
        current_sum += nums[right];
        current_sum -= nums[left];
        right++;
        left++;
        if(current_sum > ans) {
            ans = current_sum;
        }
        
    }

    return ans;

};


// Test Case 1: Basic test case with simple increasing values
let nums = [1, 2, 3, 4, 5];
let k = 3;
console.log(maximumSubarraySum(nums, k));  // Expected output: 12

// Test Case 2: All numbers are the same
nums = [5, 5, 5, 5, 5, 5, 5];
k = 4;
console.log(maximumSubarraySum(nums, k));  // Expected output: 20

// Test Case 3: Test with negative numbers
nums = [-1, -2, -3, -4, -5];
k = 2;
console.log(maximumSubarraySum(nums, k));  // Expected output: -3

// Test Case 4: k is equal to the size of the array
nums = [3, -1, 2, -5, 7];
k = 5;
console.log(maximumSubarraySum(nums, k));  // Expected output: 6

// Test Case 5: Alternating large positive and negative numbers
nums = [1000, -1000, 1000, -1000, 1000, -1000, 1000];
k = 3;
console.log(maximumSubarraySum(nums, k));  // Expected output: 1000

// Test Case 6: k larger than array size
nums = [1, 2];
k = 3;
console.log(maximumSubarraySum(nums, k));  // Expected output: 0

// Test Case 7: Best subarray at the end
nums = [-10, -20, -30, 10, 20, 30];
k = 3;
console.log(maximumSubarraySum(nums, k));  // Expected output: 60

// Test Case 8: Zeros in the array
nums = [0, 0, 0, 0, 0, 0];
k = 3;
console.log(maximumSubarraySum(nums, k));  // Expected output: 0

// Test Case 9: Large numbers in the array
nums = [999999999, -999999999, 999999999, -999999999, 999999999];
k = 3;
console.log(maximumSubarraySum(nums, k));  // Expected output: 999999999

// Test Case 10: Large array of length 100000 filled with 1's
nums = Array(100000).fill(1);
k = 1000;
console.log(maximumSubarraySum(nums, k));  // Expected output: 1000