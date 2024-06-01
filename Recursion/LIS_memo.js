var lengthOfLIS = function(nums) {
    const n = nums.length;
    const memo = Array.from({ length: n }, () => Array(n + 1).fill(-1));
    return _lis(nums, 0, -1, memo);
};

var _lis = function(nums, index, prevIndex, memo) {
    if (index === nums.length) {
        return 0;
    }
    if (memo[index][prevIndex + 1] !== -1) {
        return memo[index][prevIndex + 1];
    }

    let notTaken = _lis(nums, index + 1, prevIndex, memo);
    let taken = 0;
    if (prevIndex === -1 || nums[index] > nums[prevIndex]) {
        taken = 1 + _lis(nums, index + 1, index, memo);
    }

    memo[index][prevIndex + 1] = Math.max(taken, notTaken);
    return memo[index][prevIndex + 1];
};

// Example usage
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums)); // Output: 4
