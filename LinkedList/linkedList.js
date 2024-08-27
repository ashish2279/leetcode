class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    delete(val) {
        if (!this.head) {
            console.log("Empty List")
            return;
        }

        let curr = this.head;
        let prev;
        while (curr && curr.val != val) {
            prev = curr
            curr = curr.next
        }
        if (!curr) {
            console.log("Node not found")
            return;
        }
        else {
            console.log(curr.val + " deleted")
            this.count--;
            if (curr == this.head) {
                this.head = curr.next
            }
            else {

                prev.next = curr.next
            }
            return;
        }


    }

    deletefirst() {
        if (!this.head) {
            console.log("Empty List")
            return;
        }

        let curr = this.head;
        let next = curr.next;
        curr.next = null;
        this.head = next;
        this.count--;
    }

    deletelast() {
        if (!this.head) {
            console.log("Empty List")
            return;
        }

        let curr = this.head;
        let prev;
        while (curr && curr.next) {
            prev = curr
            curr = curr.next
        }

        if (!curr) {
            console.log("Empty list")
            return;
        }
        else {
            console.log(curr.val + " deleted")
            this.count--;
            if (curr == this.head) {
                this.head = curr.next
            }
            else {

                prev.next = curr.next
                0
            }
            return;
        }

    }

    deleteLinkedList() {
        console.log("deleting the complete list");
        if (!this.head) {
            console.log("Empty List");
            return;
        }
        let head = this.head;
        while (head) {
            this.deletelast();
            head = this.head;
        }
    }

    detectCycle() {
        let head = this.head;
        if (!head)
            return { val: 'Not present' };

        let slow = head;
        let fast = head;

        while (slow && fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (fast == slow) {
                let start = head;
                while (start !== slow) {
                    start = start.next;
                    slow = slow.next;
                }
                return start;
            }
        }

        return { val: 'Not present' };

    }

    insert(val) {
        this.count++;
        if (!this.head) {
            this.head = new Node(val)
            // console.log(val + " inserted at head")
            return;
        }

        let curr = this.head;
        let prev;
        while (curr) {
            prev = curr
            curr = curr.next
        }
        let n = new Node(val)
        prev.next = n;
        // console.log(val + " inserted")

        return n;

    }

    insertHead(val) {
        this.count++;
        if (!this.head) {
            this.head = new Node(val)
            console.log(val + " inserted")
            return;
        }

        let head = this.head;
        let n = new Node(val)
        n.next = head;
        console.log(val + " inserted at head")
        this.head = n;
        return n;

    }
    insertAtSortedPosition(val) {
        this.count++;
        if (!this.head) {
            this.head = new Node(val)
            console.log(val + " inserted")
            return;
        }

        let curr = this.head;
        let prev;
        while (curr && curr.val < val) {
            prev = curr
            curr = curr.next;
        }
        let next = prev ? prev.next : null;
        let n = new Node(val)
        if (prev) {
            let next = prev.next;
            prev.next = n;
            n.next = next;
            console.log(val + " inserted at right position")
    
            return n;
        }else {
            return this.insertHead(val);
        }
    

    }
    peek() {
        if (this.head) {

            console.log("peek element " + this.head.val)
            return this.head.val
        }
        else
            console.log("Empty list ")
    }

    print() {
        if (!this.head) {
            console.log("Empty List");
            return;
        }
        let curr = this.head;
        let res = "";
        while (curr) {
            if (Number(curr.val) < 0)
                res += "(" + curr.val + ") --> "
            else
                res += curr.val + " --> "
            curr = curr.next
        }
        res = res.slice(0, res.length - 5);
        console.log(res)
    }

    printL(head) {
        if (!head) {
            console.log("Empty List");
            return;
        }
        let curr = head;
        let res = "";
        while (curr) {
            if (Number(curr.val) < 0)
                res += "(" + curr.val + ") --> "
            else
                res += curr.val + " --> "
            curr = curr.next
        }
        res = res.slice(0, res.length - 5);
        console.log(res)
    }
    size() {
        return this.count;
    }

    findtwoHalves(head) {
        let slow = head;
        let fast = slow;
        if(!slow) {
            return {firstHead: head, secondHead: head };
        }


        while(fast && fast.next && fast.next.next) {
            slow =  slow.next;
            fast = fast.next.next;
        }

        // create two new Linked list;

        let next = slow.next;
        slow.next = null;
        // console.log("returning two halves")
        // this.printL(head);
        // this.printL(next);
        return {firstHead: head, secondHead: next }


    }

    mergeLL(left, right) {
     let mergedList = new LinkedList();
     let lptr = left;
     let rptr = right;
    //  console.log("merging left and right halves")
    //  this.printL(lptr);
    //  this.printL(rptr)
     while(lptr && rptr) {
        if(lptr.val >  rptr.val) {
            mergedList.insert(rptr.val)
             rptr = rptr.next
        } else {
            mergedList.insert(lptr.val);
            lptr = lptr.next;
        }

     }

     while(lptr) {
        mergedList.insert(lptr.val);
        lptr = lptr.next;
     }

     while(rptr) {
        mergedList.insert(rptr.val);
        rptr = rptr.next;
     }
    //  console.log("merging ")
    //  mergedList.print()
    //  console.log("\n")
     return mergedList.head;
    }

    sortLL(head) {
        if(!head || !head.next)
            return head;
        let {firstHead, secondHead} = this.findtwoHalves(head);
        // console.log(firstHead,secondHead)
        
       firstHead = this.sortLL(firstHead);
       secondHead = this.sortLL(secondHead);
       return this.mergeLL(firstHead,secondHead);
    }

    sort() {
        this.head = this.sortLL(this.head);
    }

}


module.exports = LinkedList

if (require.main === module) {
    let L = new LinkedList()
    L.insert(2)
    L.insert(4)
    // L.print()
    L.insert(5)
    // L.print()
    L.insert(10)
    // L.print()
    // let n = L.insert(30)
    // L.print()
    // n.next = p;
    // console.log("cycle present at", L.detectCycle().val)
    // n.next = null
    // console.log("cycle present at", L.detectCycle().val)
    // L.print()
    // console.log("Deleting last")
    // L.deletelast();
    // L.print();
    // console.log("Deleting First")
    // L.deletefirst();
    // L.print();
    // L.insertHead(-1);
    // L.insertHead(-2);
    // L.print();
    //L.deleteLinkedList();
    L.insert(7)
    // L.print();
    L.insert(-60)
    L.insert(-1)
    L.print();
    L.sort();
    L.print();

}
