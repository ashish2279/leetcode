function expression(str) {
    let st = []
    let i = 0;
    let res = ''
    for (let ch of str) {
        i++;
        st.push(i);
        if (ch === 'I') {
            while(st.length) {
                res += st.pop()
            }
        }
    }
    st.push(i+1)
    while(st.length) {
        res += st.pop()
    }
    
    return res;

}


console.log(expression('IDID'))
console.log(expression('DDIDDIID'))