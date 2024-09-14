
var minSubArrayLen = function(target, nums) {
    let ans = Infinity;
    let curr_sum = 0;
    let left = 0;
    let n = nums.length;

    for (let right = 0; right < n; right++) {
        curr_sum += nums[right];

        while (curr_sum >= target) {
            curr_sum -= nums[left];
            ans = Math.min(ans, right - left + 1);
            left++;
        }

      
    }

    return ans === Infinity ? 0 : ans;
};
