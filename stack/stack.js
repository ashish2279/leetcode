class Stack {
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
        return this.items.pop();
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

    print() {
        let stackString = "";
        for (let i = 0; i < this.items.length; i++) {
            stackString += this.items[i] + " ";
        }
        console.log(stackString.trim());
    }

    insert_at_bottom(x) {
        if(this.isEmpty()) {
            this.push(x);
        } else {
            let a = this.pop();
            this.insert_at_bottom(x);
            this.push(a);
        }
    }
    insert_at_sorted_position(x) {
        if(this.isEmpty() || this.peek() > x) {
            this.push(x);
        } else {
            let a = this.pop();
            this.insert_at_sorted_position(x);
            this.push(a);
        }
    }
    reverse() {
        if(!this.isEmpty()) {

            let a  = this.pop();
            this.reverse()
            this.insert_at_bottom(a)
        } 
    }

    sort() {
        if(!this.isEmpty()) {

            let a  = this.pop();
            this.sort()
            this.insert_at_sorted_position(a)
        }
    }
}

// Example of using a stack to simulate recursion for factorial calculation

module.exports = Stack
// Example usage:

if (require.main === module) {
//console.log("Factorial of 5 using recursion stack:", factorialRecursionStack(5)); // Output: 120
let stack = new Stack();
stack.push(4);
stack.push(5);
stack.push(2);
stack.push(1);
stack.push(3);
stack.print();
stack.reverse();
console.log("After reversing")
stack.print();
stack.sort();
console.log("After sorting")
stack.print();
}