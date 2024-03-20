/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */



 function reverseArrayInRange(arr, i, j) {
    if (i < 0 || j >= arr.length || i >= j) {
        return arr; 
    }

    while (i < j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }

    return arr;
}

var nextPermutation = function(nums) {
    let n = nums.length;
    let breakpoint = -1;
    let j = n-1;
    while (j>0) 
    {
        if(nums[j] <= nums [j-1])
            j--;
        else
            {
                breakpoint = j-1;
                break;
            }
    }
    console.log(breakpoint)
    if(breakpoint === -1)
        reverseArrayInRange(nums,0,n-1)
    else
    {
        let j=n-1;
        let indexOfBiggerElement;
        while (j>breakpoint)
        {
            if(nums[j] <= nums[breakpoint])
                j--;
            else
                {
                indexOfBiggerElement = j;
                break;
                }
                    

        }
        [nums[breakpoint],nums[indexOfBiggerElement]] = [nums[indexOfBiggerElement],nums[breakpoint]];
        reverseArrayInRange(nums,breakpoint+1,n-1)
    }
};
