/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
    let ANS = -10000000;
                let tempANS = 0;
    for(let i = 0 ; i<nums.length; i++){
                tempANS  += nums[i]
                if(tempANS > ANS )
                    ANS = tempANS
                if(tempANS <= 0)
                    tempANS = 0
            }

            return ANS;
};
