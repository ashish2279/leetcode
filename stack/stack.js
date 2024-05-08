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
function factorialRecursionStack(n) {
    const stack = new Stack();
    stack.push(n);

    let result = 1;

    while (!stack.isEmpty()) {
        const current = stack.pop();
        if (current > 1) {
            stack.push(current - 1);
        }
        result *= current;
    }

    return result;
}

// Example usage:
console.log("Factorial of 5 using recursion stack:", factorialRecursionStack(5)); // Output: 120
