function reversal (str, n) {
   if(n<=0)
    return '';
   return str[n-1] + reversal(str,n-1)

}

function reverseArrayInPlace(arr, index = 0) {
    if (index >= Math.floor(arr.length / 2)) {
        return arr;
    }

    [arr[index], arr[arr.length - 1 - index]] = [arr[arr.length - 1 - index], arr[index]];

    return reverseArrayInPlace(arr, index + 1);
}

let arr = [1, 2, 3, 4, 5];
reverseArrayInPlace(arr)
console.log(arr)

let str = 'Ashish'
str = reversal(str, str.length)
console.log(str)


