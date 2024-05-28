const Stack = require('./../stack/stack')

class Queue {
    constructor() {
        this.s1 = new Stack()
        this.s2 = new Stack()
    }

    push(x) {
        while(!this.s1.isEmpty()) {
            this.s2.push(this.s1.pop());
        }

        this.s1.push(x)

        while(!this.s2.isEmpty())
        {
            this.s1.push(this.s2.pop())
        }

    }

    pop() {
        return this.s1.pop()
    }

    isEmpty() {
        return this.s1.isEmpty()
    }
}

if (require.main === module) {
    let q = new Queue();
    q.push(1)
    q.push(2)
    q.push(3)
    q.push(4)
    console.log(q.pop())
    console.log(q.pop())
    console.log(q.pop())
    console.log(q.pop())
    
}