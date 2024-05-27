class Stack {
    constructor(size = 10) {
        this.items = new Array(size);
        this.count= 0;
    
    }

    push(element) {
        if( this.count < this.items.length)
            this.items[this.count++] = element
        else
            console.log("Stack overflow")      
    }

    pop() {
        if (this.count <= 0) {
            console.log("empty array")
            return null;
        }
        let ele  = this.peek()
        delete this.items[this.count--];
        return ele;
    }

    peek() {
        if (this.count <=0 )
            {
                console.log("Empty Array")
            }
        return this.items[this.count - 1];
    }

    isEmpty() {
        return this.count === 0
    }

    size() {
        console.log("size is",this.count)
        return this.count;
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


let stack = new Stack(3)
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack.size())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())