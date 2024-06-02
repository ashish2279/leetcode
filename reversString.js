
function reverse (str) {
    let arr = str.split('')
 
    let n = str.length;

    for (let i=0;i < n/2 ;i++) {
        [arr[i],arr[n-i-1]] = [arr[n-i-1],arr[i]]
    }
    return arr.join('')
}

console.log(reverse('123456'))