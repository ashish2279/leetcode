const LinkedList = require('./linkedList')

class newlinkedList extends LinkedList{
    print2() {
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

    altrnateTwo () {

        let count =0;
        let head = this.head;
        if(!head)
            return;
        let firstLinkedList = new newlinkedList();
        let secondLinkedList = new newlinkedList();

        while(head) {
            if(count%2 === 0) {
                firstLinkedList.insert(head.val)
            } else {
                secondLinkedList.insert(head.val);
            }
            count++;
            head = head.next;
        }
        console.log("\nprinting the two halves having alternative elements")
        firstLinkedList.print2();
        secondLinkedList.print2();
        return {firstLinkedList,secondLinkedList}
    }

    removeduplicates(head = this.head) {
        let map =  new Map();
        let thead = head;
        if(!thead) {
            return;
        }
        let prev  = thead;
        while(thead) {
            if(!map.has(thead.val)) {
                map.set(thead.val,1);
            } else {
                prev.next = thead.next;
            }
            prev = thead;
            thead = thead.next;
        }
        console.log("\nList after removing the duplcate elements")
        this.printL(head)
        return;
    }

    removeduplicatesSorted(head = this.head) {
        let thead = head;
        if(!thead) {
            return;
        }
        let prev  = null;
        while(thead) {
            if(prev && prev.val == thead.val) {
                prev.next = thead.next;                
            }
            prev = thead;
            thead = thead.next;
        }
        console.log("\nList after removing the duplcate elements")
        this.printL(head)
        return;
    }

    insertNodeAtFront(node) {
        if(!this.head) {
            this.head = node;
            return ;
        }

        node.next = this.head;
        this.head = node;
        return;
    }    

    moveEvenNodesAtLastInReverse(head = this.head) {
        let count = 1;  // Start counting from 1 (assuming 1-based index)
        let temp = head;
        if (!head) return;  
        
        let firstLinkedList = new newlinkedList();  
        let prev = null;  
        
        while (temp) {
            if (count % 2 === 0) {  
                console.log("Inserting ", temp.val);
                firstLinkedList.insertHead(temp.val); 
                prev.next = temp.next;  
            } else {
                prev = temp;  
            }
            temp = temp.next;
            count++;
        }
        
        if (firstLinkedList.head) {
            prev.next = firstLinkedList.head;  // Append the new list to the end of the original list
        }
        
        console.log("\nPrinting list after moving even nodes at last");
        this.printL(head);
    }

    reverseIterative(head = this.head){
        if(!head)
            return;

        let L = new newlinkedList();
        let temp = head;
        while(temp) {
            let next = temp.next;
            temp.next = null;
            L.insertNodeAtFront(temp);
            temp = next;
        }
        this.head = L.head;
        console.log("reversing the linked list Iteratively"); 
        this.print();
    }
    
    reverseRec(node) {
        if(!node || !node.next){
            this.head = node;
            return node;

        }
        let newHead = this.reverseRec(node.next);
        node.next.next = node;
        node.next = null;
        return newHead;
    }
}


module.exports = newlinkedList

if (require.main === module) {
    let L = new newlinkedList()
    L.insert(12)
    L.insert(12)
    L.insert(5);
    L.insert(12);
    L.insert(4)
    L.insert(17)
    L.insert(5)
    L.insert(10)
    L.insert(17)
    L.insert(-60)
    L.insert(5)
    L.insert(-1)
    L.insert(4)
    L.insert(5)
    L.print2();
    L.sort();
    console.log("\nlist after sorting the list");
    L.print2();

    L.altrnateTwo();
    L.removeduplicatesSorted();
    L.moveEvenNodesAtLastInReverse(L.head);
    L.reverseIterative(L.head);
    L.reverseRec(L.head);
    console.log("Reversing the list recursively")
    L.print()

}
