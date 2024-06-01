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

        findheight(node) {
            if(!node)
                return 0;
            else 
                return 1 + Math.max(this.findheight(node.left),this.findheight(node.right))

        }
        findelementAtKdist(k) {
            let res = [];
            console.log("relement at level :%j", k)
            this.findKlevel(this.root, k, res)
        }

        findKlevel(node, k, res) {
            if(!node || k<0)
                return
            if(k==0) {
                console.log(node.val)
                return
            }

            this.findKlevel(node.left,k-1,res)
            this.findKlevel(node.right, k-1,res)
        }

        findpath(root, path, n1) {
            if(!root)
                return false;
            path.push(root.val);
            if (root.val == n1) {
                return true;
            }
            if (root.left && this.findpath(root.left , path, n1))
                return true;
            if(root.right && this.findpath(root.right, path, n1))
                return true;
    
            path.pop()  // it means no path exist
            return false;
        }

        findAncestors(k) {

            let path = []
            if(this.findpath(this.root,path, k))
                console.log(path)
            else{
                console.log(path)
                console.log(" element doesn't exist")
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
let height = tree.findheight(tree.root)

console.log("height is ",height)
tree.findelementAtKdist(0)
tree.findAncestors(15)