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
            console.log(val)
            return ;
        }

        let curr = this.head;
        let  prev;
        while (curr) {
            prev = curr
            curr = curr.next
        }
         prev.next = new Node(val);
         console.log(val)
         
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

    search(key) {
        let curr = this.head;
        while(curr) {
            if (curr.val && (curr.val).hasOwnProperty(key))
                return curr.val[key];
            curr = curr.next
        }
        return "Not Found"
    }

    delete(key) {
        if(!this.head) {
            console.log("Empty List")
            return ;
        }

        let curr = this.head;
        let  prev;
        while (curr && curr.val && !(curr.val).hasOwnProperty(key)) {
            prev = curr
            curr = curr.next
        }
        if(!curr)
            {
                console.log("Key not found")
                return;
            }
        else {
            console.log(curr.val)
            console.log("deleted")
            if(curr == this.head)
                {
                    this.head = curr.next
                }
            else
            {

                prev.next = curr.next
           }
            return;
        }
         
         
    }
}

class HashTable {
    constructor() {
        this.table  = Array(10).fill(new LinkedList())
    }

    hashFunction (key) {
        return key % 10
    }

    insertWithColision(key, val) {
        let hash_Index = this.hashFunction(key)
        if(this.table[hash_Index]) {
            console.log("element already present , collision detected",this.table[hash_Index])
        } else {
            this.table[hash_Index] =val
        }
        
    }

    search(key) {
        let hash_Index = this.hashFunction(key)
            return this.table[hash_Index].search(key)
    }

    insertWithChaining(key, val) {
        let hash_Index = this.hashFunction(key)
        let obj = {}
        obj[key] = val
        this.table[hash_Index].insert(obj)
    }

    delete(key) {
        let hash_Index = this.hashFunction(key)
            return this.table[hash_Index].delete(key)
    }
}


let HT = new HashTable()

HT.insertWithChaining(12, 'ashish')
HT.insertWithChaining(2, 'ASh')
HT.insertWithChaining(42, 'AK')
console.log(HT.search(42))
console.log(HT.delete(42))
console.log(HT.search(42))
console.log(HT.delete(42))