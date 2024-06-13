function combination(par, open, close,n) {
    if(par.length === 2*n) {
        let a = [];
        a.push(par);
        return a;
    }
     let left, right ; 
    if(open>0) {
       left =  combination(par + '(',open-1,close,n)
    }

    if(open < close) {
       right =  combination(par + ')', open,close-1,n)
    }

    let ans = []

    if(left)
        ans = [...left,...ans]
    if(right)
        ans = [...right,...ans]

    return ans;
}


let n =2;
console.log(combination('',n,n,n))