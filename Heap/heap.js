class Heap {
    constructor() {
        this.items = [];
    }

    parent(i) {
        return Math.floor((i - 1)/2);
    }

    leftChild (i) {
        return 2 * i + 1;  
    }

    rightChild (i) {
        return 2 * i + 2;
    }

    getSize() {
        return this.items.length;
    }
    

    insert (val) {
        this.items.push(val);
        this.heapifyUp();
    }

    print() {
        console.log(this.items)
        return 
    }

    heapifyUp() {
        let index =  this.items.length -1 ;
        if(index<=0)
            return;
        while(index > 0 &&  this.items[index] < this.items[this.parent(index)]) {
          [this.items[index] , this.items[this.parent(index)]] = [this.items[this.parent(index)] , this.items[index]]
          index =  this.parent(index)
        }
    }

    peek() {
        return this.items.length > 0 ? this.items[0] : null;
      }

    heapifyDown() {
        let index = 0;

        while(index< this.items.length) {
            let min;
            
            if(this.rightChild(index) < this.items.length && this.items[this.leftChild(index)] > this.items[this.rightChild(index)])
                {
                    min = this.rightChild(index)
                }
            else {
                min = this.leftChild(index)
            }

            if(min >= this.items.length || this.items[min] > this.items[index])
                {
                    break;
                }
            [this.items[min] ,this.items[index]] = [this.items[index],this.items[min]]
            index = min;
        }
    }
    remove() {
        if(this.items.length === 0) {console.log("empty heap");return null}
        if(this.items.length === 1) {return this.items.pop()}
        let last = this.items.length -1
        let root = this.items[0];
        [this.items[last],this.items[0]] = [this.items[0],this.items[last]];
        this.items.pop();
        this.heapifyDown();
        return root;
    }
}

let h = new Heap();
h.insert(1);
h.insert(2);
h.insert(13);
h.insert(4);
h.insert(5);
h.insert(0)
h.print();
console.log("peek", h.peek())    
console.log(h.remove())
console.log(h.remove())
console.log(h.remove())
console.log(h.remove())
console.log(h.remove())
console.log(h.remove())   