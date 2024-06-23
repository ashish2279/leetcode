/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

function top(st) {
    return st.length && st[st.length-1]
}
var previousSmaller = function(nums) {
    let n = nums.length
    if(nums.length == 0)
    return []
    let st =[]
    st.push(n-1)
    let res = []
    for (let i=n-2; i>=0 ;i--) {
        while(st.length && nums[top(st)] > nums[i])
        {
            res[st.pop()]= nums[i]
        }
 
            st.push(i)
    }

    while(st.length) {
        let val = st.pop()
        res[val] =  -1 
    }

    return res
};


var nextSmaller = function(nums) {
    let n = nums.length
    if(nums.length == 0)
    return []
    let st =[]
    st.push(0)
    let res = []
    for (let i=1; i<n ;i++) {
        while(st.length && nums[top(st)] > nums[i])
        {
            res[st.pop()]= nums[i]
        }
 
            st.push(i)
    }

    while(st.length) {
        let val = st.pop()
        res[val] =  -1 
    }

    return res
};


let  nums2 = [0,2,1,5,6,2,3,0]
console.log("prev samller : %j",previousSmaller(nums2))
console.log("next smaller : %j",nextSmaller(nums2))