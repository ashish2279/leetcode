/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

function top(st) {
    return st.length && st[st.length-1]
}
var nextGreaterElements = function(nums) {
    let mp = new Map()
    let n = nums.length
    if(nums.length == 0)
    return []
    let st =[]
    st.push(0)
    let res = []
    for (let i=1;i<2*nums.length;i++) {
        while(st.length && nums[top(st)] < nums[i%n])
        {
            res[st.pop()]= nums[i%n]
        }
        if(i<n)
            st.push(i%n)
    }

    while(st.length) {
        let val = st.pop()
        res[val] =  -1 
    }

    // let res= []
    // for (let i =0 ;i<nums.length;i++) {
    //     res.push(mp.get(nums[i]))
    // }

    return res
};



let  nums2 = [1,3,4,2]
console.log(nextGreaterElement(nums2))