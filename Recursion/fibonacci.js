function fib(n) {
    if (n<=1)
        return n;
    return fib(n-1) + fib(n-2)
}

function fib2(n, arr) {

    if(n<=1)
        return n;
    if(arr[n]!=-1){
        return arr[n];
    }
    arr[n] = fib2(n-1,arr) + fib2(n-2, arr)
    return arr[n];
}

let n = 5;
console.log(` fibonacci of ${n} is ${fib(n)}` )

n =7;

let arr =  new Array(n+1).fill(-1);
console.log(` fibonacci of ${n} is ${fib2(n,arr)}` )
