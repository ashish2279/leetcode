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
}

// Example of using a stack to simulate recursion for factorial calculation

module.exports = Stack
// Example usage:

if (require.main === module) {
console.log("Factorial of 5 using recursion stack:", factorialRecursionStack(5)); // Output: 120
}