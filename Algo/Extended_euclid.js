function  ExtendedEuclid(aObj, bObj) {
    let S1 = 1
    let S2 = 0 
    let T1 = 0
    let T2 = 1
    
    let a = aObj.val, b = bObj.val;
    console.log("Q A B R S1 S2 S T1 T2 T")
    while(b!==0) {
        
        const q = Math.floor(a/b);
        console.log(q,a,b,a%B,S1,S2,S1 - q * S2,T1,T2,T1 - q * T2);
        [a,b] = [b, a%b];
        [S1,S2] = [S2, S1 - q * S2];
        [T1,T2] = [T2, T1 - q * T2];
    }

    aObj.val = a;
    bObj.val = b;
    return { gcd: a, S: S1, T: T1 };
}

// Example usage
let a = { val: 154 };
let b = { val: 24 };
let A =a.val, B=b.val;
const result = ExtendedEuclid(a, b);
console.log(" a * S + b * y = gcd (a,b) ")
console.log(` ${A} * ${result.S} + ${B} * ${result.T} = ${result.gcd}`);
