class Node{
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null
    }

    peek() 
    {
        if(this.head)
        console.log("peek element " + this.head.val)
        else
         console.log("Empty list ")
    }
    insert(val) {
        if(!this.head) {
            this.head = new Node(val)
            console.log(val + " inserted")
            return ;
        }

        let curr = this.head;
        let  prev;
        while (curr) {
            prev = curr
            curr = curr.next
        }
        let n = new Node(val)
         prev.next = n;
         console.log(val + " inserted")
         
         return n;
            
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

    delete(val) {
        if(!this.head) {
            console.log("Empty List")
            return ;
        }

        let curr = this.head;
        let  prev;
        while (curr && curr.val != val) {
            prev = curr
            curr = curr.next
        }
        if(!curr)
            {
                console.log("Node not found")
                return;
            }
        else {
            console.log(curr.val + " deleted")
            if(curr == this.head)
                {
                    this.head = curr.next
                }
            else
            {

                prev.next = curr.next
0            }
            return;
        }
         
         
    }

    deletelast() {
        if(!this.head) {
            console.log("Empty List")
            return ;
        }

        let curr = this.head;
        let  prev;
        while (curr && curr.next) {
            prev = curr
            curr = curr.next
        }

        if(!curr)
            {
                console.log("Empty list")
                return;
            }
        else {
            console.log(curr.val + " deleted")
            if(curr == this.head)
                {
                    this.head = curr.next
                }
            else
            {

                prev.next = curr.next
0            }
            return;
        }
                  
    }

    detectCycle() {
        let head = this.head;
        if(!head)
            return {val : 'Not present'};

        let slow = head;
        let fast = head;

        while (slow && fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if(fast == slow)
                return slow;
        }

        return {val : 'Not present'};

    }
}


module.exports = LinkedList

let L = new LinkedList()
L.insert(2)
L.insert(4)
L.print()
L.insert(5)
L.print()
L.insert(1)
L.print()
let n = L.insert(3)
L.print()
n.next = L.head;
console.log("cycle present at",L.detectCycle().val)
n.next = null
console.log("cycle present at",L.detectCycle().val)
// L.delete(4)
// L.delete(2)
// L.peek()
// L.delete(1)
// L.peek()
// L.delete(3)