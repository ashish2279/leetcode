class Node{
    constructor(val) {
        this.val = val;
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null;
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
         prev.next = new Node(val);
         console.log(val + " inserted")
         
         return;
            
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
}


let L = new LinkedList()
L.insert(2)
L.insert(3)
L.print()
L.delete(3)
L.print()
L.insert(1)
L.print()
L.insert(3)
L.print()
L.delete(4)
L.delete(2)
L.peek()
L.delete(1)
L.peek()
L.delete(3)