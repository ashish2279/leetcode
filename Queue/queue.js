class Queue {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items.shift();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}
module.exports = Queue
if (require.main === module) {
    let q = new Queue();
    q.push(4)

    console.log(q.peek())
    console.log(q.pop())
    console.log(q.peek())
}
