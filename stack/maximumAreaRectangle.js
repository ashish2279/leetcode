
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
            res[st.pop()]= i
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
            res[st.pop()]= i
        }
 
            st.push(i)
    }

    while(st.length) {
        let val = st.pop()
        res[val] =  n 
    }

    return res
};



function maxArea(arr) {

    let i=0;
    let ns = nextSmaller(arr)
    let ps = previousSmaller(arr)
    let ans = 0;
    while(i<arr.length) {
        ans  =   Math.max(ans,(ns[i] - ps[i] -1) * arr[i])
        i++;
    }
    return ans
}

let  nums2 = [2,1,5,6,2,3,4,5]

console.log(maxArea(nums2))