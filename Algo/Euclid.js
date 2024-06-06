function gcd(a,b) {
    let A = Math.min(a,b)
    let B = Math.max(a,b)

    if(!A)
        return B;
    return gcd (b%a, a)
}


function gcd2(a,b) {
    let A = Math.min(a,b)
    let B = Math.max(a,b)

    if(!A)
        return B;

    do  {
        console.log(`-------------------------------------`)
        remainder = B % A
        console.log(`  ${A} ) ${B}  ( ${Math.floor(B/A)}`)
        console.log(`       ${Math.floor(B/A) * A}      `)
        console.log(`-------------------------------------`)
        console.log(`       ${remainder}`)
        if(remainder === 0)
                break; 
        B = A;
        A = remainder;
    } while(remainder>1)

    if (!remainder)
        {
            return A;
        }
    else    
        return 1
}

console.log(gcd2(130,26))