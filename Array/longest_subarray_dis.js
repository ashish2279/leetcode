/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let n = s.length;

    let ans = 0;
    let map = new Map();
    let left = 0;
    let curr_len = 0;
    for(let right =0;right<n;right++) {
        if(map.has(s[right])) {
             left = Math.max(map.get(s[right]) + 1,left);
        } 
        map.set(s[right],right);

        curr_len = right - left + 1;
            if(curr_len > ans)
                ans = curr_len 
    }
    return ans;
};