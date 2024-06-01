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

var lengthOfLISUsingDP  = function (nums) {
    const dp = Array(n).fill(1);
    const n  = nums.length;

    for (let i=1;i<n;i++) {
        for (let j = 0;j<i;j++)
            {
                if(arr[j] < arr[i]) {
                    dp[i] = max (dp[i], 1+dp[i-1])
                }
            }
    }

    let max = 1;
    for (let len of dp) {
        max = Math.max(len, max)
    }

    return max;
}
// Example usage
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums)); // Output: 4
