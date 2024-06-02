class Stack {
    constructor() {
        this.st = []
        this.min = null
    }

    top() {
        if(!this.isEmpty() && this.st[this.st.length-1] < this.min)
            return this.min;
        else 
            return this.st[this.st.length-1]

    }
    pop() {
        if(!this.isEmpty())  {
            let val  = this.st.pop()

            if(val < this.min) {
                let temp = this.min
                this.min = 2*this.min - val
                return temp
            }
            else
                return val;

        }
        else {
            console.log("Empty Stack")
        }
    }

    push(ele) {
        if(this.isEmpty())
            {
                this.st.push(ele);
                this.min = ele;
                return ; 
            }
        if(ele < this.min) {
            this.st.push(2*ele - this.min);
            this.min = ele
        } else{

            this.st.push(ele)
        }
    }

    isEmpty () {
        return this.st.length === 0; 
    }

    getMin() {
        if (!this.isEmpty()) {
            return this.min
        } else {
            return "empty"
        }
    }
}


if (require.main === module) {
    let stack = new Stack()
    console.log("pushed ",2)
    stack.push(2)
    console.log(" min ",stack.getMin())
    console.log("pushed ",1)
    stack.push(1)
    console.log(" min ",stack.getMin())
    console.log("pushed ",-1)
    stack.push(-1)
    console.log(" min ",stack.getMin())
    stack.push(3)
    console.log("pushed ",3)
    console.log(" min ",stack.getMin())
    stack.push(0)
    console.log("pushed ",0)
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