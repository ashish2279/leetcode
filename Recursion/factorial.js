function fact(n) {
    if (n==0 || n==1)
        return 1;
    return n * fact(n-1)
}

function fact2(n, arr) {

    if(n<=1)
        return 1;
    if(arr[n]!=-1){
        return arr[n];
    }
    arr[n] = n * fact2(n-1, arr)
    return arr[n];
}

let n = 5;
console.log(` factorial of ${n} is ${fact(n)}` )

n =6;

let arr =  new Array(n+1).fill(-1);
console.log(` factorial of ${n} is ${fact2(n,arr)}` )
