// t1 = 1, t2 = 3, T(n) = n + T(n-1)



function nthTriangle(n) {
    if( n == 1)
        return 1;
    if(n === 2)
        return 3;
    return n + nthTriangle(n-1)
}


function nthTriangle2(n) {
 let sum = 0;

for(let i=1;i<=n;i++){
        sum += i
    }
    return sum
}

function nthTriangle3(n) {
    return (n * (n+1))/2
   }
let n =6;

console.log(nthTriangle(n))

console.log(nthTriangle2(n))

console.log(nthTriangle3(n))