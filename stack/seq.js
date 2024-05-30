function expression(str) {
    let st = []
    let i = 0;
    let res = ''
    for (let ch of str) {
        i++;
        st.push(i);

        if (ch === 'I') {

            // if previously it was I then it means it has already been in output. and if there are any elements output them
            while(st.length) {
                res += st.pop()
            }
        }

        // in case of D we are simply pushing into stack so that after popping we will get a decreasing sequence 
    }
    st.push(i+1)
    while(st.length) {
        res += st.pop()
    }
    
    return res;

}


console.log(expression('IDID'))
console.log(expression('DDIDDIID'))