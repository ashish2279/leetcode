class Queue {
    constructor(val1 , val2) {
        this.size = val1;
        this.length = val2
    }
 
    printValues() {
        console.log(` creating a queue with length ${this.length} and size ${this.size}`)
    }
}

let q = new Queue(12,3)
q.printValues()