function isOperator(ch) {
    if(ch == '+' || ch == '-' || ch == '*' || ch == '/' || ch == '^')
        return true;
    return false
}
function precedence ( ch) {
switch(ch) {
    case '+': return 1;
    case '-' : return 1;
    case '*' : return 3;
    case '/' : return 3;
    case '^' : return 5;
}
}

function associativity(char) {
    if (char == '^')
        return 'R'
    return 'L'  
}

function top (st) {
    return st[st.length -1]
}
function infixToPrefix(str) {
    let st = []
    let res = ''
    for (let char of str) {
        if(char == '(')
            st.push(char)
        else if(char === ')') {
            while(st.length && top(st) != '(')
                {
                        res += st.pop()
                }
                st.pop()
        } else if (isOperator(char)) {
            while(
            st.length && top(st) != '(' 
                      && 
            ( (precedence(top(st)) > precedence(char) )
                     || 
            (precedence(top(st)) == precedence(char) && associativity(char) == 'L'))
        )
                {
                        res += st.pop()
                }
            st.push(char)
        } else
           res += char
    }

    return res
}

console.log(infixToPrefix('a+b*(c^d-e)^(f+g*h)-i'))

