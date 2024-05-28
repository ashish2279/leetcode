function evaluate(exp) {
    let st = []
    let n = exp.length;
    if (n < 3 ) {
        console.log("minimum 3 element required")
        return;
    }
    

    for (let ele of exp) {
        if (isNaN(Number(ele))) {
            let val;
            let sec = Number(st.pop())
            let first  = Number(st.pop())
            switch (ele) {
                case '+': val = first + sec ;
                        break;
                case '-': val = first - sec ;
                        break;
                case '*': val = first * sec ;
                        break;
                case '/': val = first / sec ;
                        break;
            }
            st.push(val)
        } else {
            st.push(Number(ele))
        }


    }
    return st.pop()
}


console.log(evaluate('231*+9-'))