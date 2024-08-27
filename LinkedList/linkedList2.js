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

}
