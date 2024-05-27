class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    peek() 
    {
        if(this.tail) {
            return this.tail.val
        }
        else
         console.log("Empty list ")
    }

    insert(val) {
        if(!this.head) {
            this.head = new Node(val)
            this.tail = this.head;
            this.count++;
            return ;
        }
        let temp = this.tail
        temp.next = new Node(val);
        this.count++;
        this.tail = temp.next
        return 
    }
    print () {
        let curr = this.head;
        let res= "";
        while(curr) {
            res +=  curr.val + "-> "
            curr = curr.next
        }
        console.log(res)
    }

    delete() {
        if(!this.tail) {
            console.log("Empty List")
            return ;
        }

        let curr = this.head;
        let  prev;
        while (curr !=  this.tail) {
            prev = curr
            curr = curr.next
        }
        this.count--;
        let val = this.peek()
        if(this.head == this.tail) {
            this.head = null;
            this.tail = null;
            return val;
        }        
        prev.next = null;
        this.tail = prev;   
        return val;  
    }
}



class Stack {
    constructor() {
        this.items = new LinkedList();
    }

    push(element) {
        this.items.insert(element)      
    }

    pop() {
        if (this.items.count <= 0) {
            console.log("empty stack")
            return null;
        }
        return this.items.delete()
    }

    peek() {
        if (this.count <=0 )
            {
                console.log("Empty Array")
            }
        return this.items.peek()
    }

    isEmpty() {
        return this.items.count === 0
    }

    size() {
        console.log("size is",this.items.count)
        return this.items.count;
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

console.log(stack.pop())