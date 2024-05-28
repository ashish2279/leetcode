const Queue = require('./../Queue/queue')
class Stack {
    constructor() {
        this.q1 = new Queue()
        this.q2 = new Queue()
    }

    push(x) {

        this.q2.push(x);

        while(!this.q1.isEmpty()) {
            this.q2.push(this.q1.pop())
        }

        let q = this.q1;
        this.q1 = this.q2;
        this.q2 = q
    }

    pop() {
        return this.q1.pop()
    }

    isEmpty() {
        return this.q1.length === 0
    }
}



let st = new Stack()

st.push(1)
st.push(2)
st.push(3)


console.log(st.pop())
console.log(st.pop())
console.log(st.pop())