
class Queue {
    constructor(size = 10) {
        this.items = new Array(size);
        this.count= 0;
         
    }

    push(element) {
        if( this.count < this.items.length)
            this.items[this.count++] = element
        else
            console.log("Queue overflow")      
    }

    pop() {
        if (this.count <= 0) {
            console.log("empty array")
            return null;
        }
        let ele  = this.peek();
        for(let i=1;i<this.count;i++) {
            this.items[i-1] = this.items[i];
        }
        delete this.items[this.count--];
        return ele;
    }

    peek() {
        if (this.count <=0 )
            {
                console.log("Empty Array")
            }
        return this.items[0];
    }

    isEmpty() {
        return this.count === 0
    }

    size() {
        console.log("size is",this.count)
        return this.count;
    }
}



module.exports = Queue;


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