class Stack {
    constructor() {
        this.main = []
        this.min_st = []
    }

    top(st) {
        if(st.length)
            return st[st.length -1 ]
        return "Empty Stack"
    }
    pop() {
        if(!this.isEmpty())  {
            let val  = this.main.pop()

            if(val === this.top(this.min_st)) {
                this.min_st.pop()
            }
            return val;

        }
        else {
            console.log("Empty Stack")
        }
    }

    push(ele) {
        if(this.min_st.length <= 0 || ele <= this.top(this.min_st)) {
            this.min_st.push(ele);
        }
        this.main.push(ele)
    }

    isEmpty () {
        return this.main.length === 0; 
    }

    getMin() {
        if (!this.isEmpty()) {

            return this.min_st[this.min_st.length-1] 
        } else {
            return "empty"
        }
    }
}


if (require.main === module) {
    let stack = new Stack()
    stack.push(1)
    console.log(" min ",stack.getMin())
    stack.push(2)
    stack.push(3)
    stack.push(0)
    console.log("min ", stack.getMin())
    console.log("popped ", stack.pop())
    console.log("min ", stack.getMin())
    console.log("popped ", stack.pop())
    console.log("min ", stack.getMin())
    console.log("popped ", stack.pop())
    console.log("min ", stack.getMin())
    console.log("popped ", stack.pop())
    console.log("min ", stack.getMin())



}