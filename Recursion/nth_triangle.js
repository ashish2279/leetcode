// t1 = 1, t2 = 3, T(n) = n + T(n-1)



function nthTriangle(n) {
    if( n == 1)
        return 1;
    if(n === 2)
        return 3;
    return n + nthTriangle(n-1)
}


let n =5;
console.log(nthTriangle(n))