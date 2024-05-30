/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

function top(st) {
    return st.length && st[st.length-1]
}
var nextGreaterElement = function(nums1, nums2) {
    let mp = new Map()
    if(nums1.length == 0 || nums2.length == 0)
    return []
    let st =[]
    st.push(nums2[0])
    
    for (let i=1;i<nums2.length;i++) {
        while(st.length && top(st) < nums2[i])
        {
            mp.set(st.pop(), nums2[i])
        }

        st.push(nums2[i])
    }

    while(st.length) {
       mp.set(st.pop(), -1) 
    }
    let res= []
    for (let i =0 ;i<nums1.length;i++) {
        res.push(mp.get(nums1[i]))
    }
    return res
};
let nums1 = [4,1,2]
let  nums2 = [1,3,4,2]
console.log(nextGreaterElement(nums1,nums2))