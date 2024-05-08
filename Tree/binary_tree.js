class Node {
    constructor(val) {
        this.val = val;
        this.left  = null;
        this.right = null
    }
} 
class Tree {
        constructor()
        {
            this.root = null
        }

        insert(data) {
            let node = new Node(data)
            if(this.root == null)
                {
                    this.root = node
                    return ;
                }
            else {
                return this.insertNode(this.root, node)
            }
        }

        insertNode(node, NewNode){
            if(node.left === null){
                    node.left = NewNode;
                    return;
                }
            else if (node.right === null){
                    node.right = NewNode;
                    return;
                }
            else {
                return this.insertNode(node.left,NewNode);
            }
        }
        printInorder() {
            return this.PrintRec(this.root);
        }
        PrintRec(node)
        {
            if(node!=null)
                {
                    this.PrintRec(node.left) 
                    console.log(node.val)
                    this.PrintRec(node.right)
                
                }

        }
}



let tree = new Tree()
tree.insert(1);
tree.insert(2)
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.printInorder()