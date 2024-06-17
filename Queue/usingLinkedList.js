
const LinkedList = require('./../LinkedList/linkedList')
class Queue {
    constructor() {
        this.items = new LinkedList()
         
    }

    push(element) {
        this.items.insert(element)      
    }

    pop() {
        if (this.size() <= 0) {
            console.log("empty array")
            return null;
        }
        let ele  = this.peek();
        this.items.deletefirst()
        return ele;
    }

    peek() {
        if (this.size()<=0 )
            {
                console.log("Empty Array")
            }
        return this.items.peek();
    }

    isEmpty() {
        return this.size() === 0
    }

    size() {  
        return this.items.size();
    }
}


if (require.main === module ) {

let q = new Queue(3)
console.log("push 1")
q.push(1)
console.log("push 2")
q.push(2)
console.log("push 3")
q.push(3)
console.log("queue size is : %j",q.size())

console.log("push 4")
q.push(4)
console.log("\npopping : %j",q.pop())
console.log("popping : %j",q.pop())
console.log("popping : %j",q.pop())
console.log(q.pop())
}