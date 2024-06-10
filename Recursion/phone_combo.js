
const keyMap = {
    '2' : 'abc',
    '3' : 'def',
    '4' : 'ghi',
    '5' : 'jkl',
    '6' : 'mno',
    '7' : 'pqrs',
    '8' : 'tuv',
    '9' : 'wxyz'
}

function comb (pr , up) {
    if(up.length === 0) {
        console.log(pr);
        ans.push(pr)
        return;
    }

    let ch = up[0];
    for (let char of keyMap[ch]) {
        comb(pr+char, up.substring(1),ans)
    }

}


let str = '23';
ans = []
comb('',str,ans)
console.log(ans)
