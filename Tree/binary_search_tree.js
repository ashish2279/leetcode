class Node {
    constructor(data) {
        this.val = data;
        this.left = null;
        this.right= null;
    }
    
    
}

class Tree{
    constructor()
    {
        this.root = null;
    }

    insert(data) {
        let newNode = new Node(data);
        if(!this.root)
            {
                this.root = newNode;
                return;
            }
        else
        {
            return this.insertNode(this.root, newNode)
        }

    }

    insertNode(node, newNode) {

        if(newNode.val < node.val)
            {
                if(!node.left)
                    {
                        node.left = newNode;
                        return;

                    }

                    else {
                        return this.insertNode(node.left, newNode)
                    }
            }
            else{
                if(!node.right)
                    {
                        node.right = newNode;
                        return;

                    }

                    else {
                        return this.insertNode(node.right, newNode)
                    }
            }
    }
    inorderTraversal(node) {
        if(node!=null)
            {
                this.inorderTraversal(node.left) 
                console.log(node.val)
                this.inorderTraversal(node.right)
            
            }
    }
    search(node,val) 
    {
        if(!node)
            return false;
        if(node.val === val)
            {
                console.log("element found, ",val)
                return true;
            
            }
        else if (node.val > val) {
            console.log(` node ${node.val} is greater than ${val} so going left`)
                return this.search(node.left,val) 
        }
        else{
            console.log(` node ${node.val} is less than ${val} so going right`)
            return this.search(node.right,val)
        }    
    }

    deleteNode(root,val) {
        function findsuccessor (root) {
            if(!root.left)
                    return root;
            else
                return findsuccessor(root.left)
        }
        
        if(!root)
            {
                console.log("Node not found")
                return null;
            }

        if (root.val == val) {
            console.log("value found")
            if(root.left === null && root.right === null){
                console.log("no child")
                root = null;
                return root;
            }
            else if (!root.left)
                {
                    console.log("right child")
                    root  = root.right
                    return root;
                }
            else if(!root.right) {
                console.log("left child")
                root = root.left;
                return root;
            } else {
                console
                let successor = findsuccessor(root.right);
                root.val = successor.val;
                root.right = this.deleteNode(root.right, successor.val);
                return root;
            }
        } else if(val < root.val ) {
            console.log("search left ", root.val)
            root.left =  this.deleteNode(root.left,val)
            return root
        }
        else {
            console.log("search right ",root.val)
            root.right =  this.deleteNode(root.right,val)
            return root
        }
    }
    
}


const tree = new Tree();
const keys = [1, 2, 3, 14, 5, 6, 7,8,9,16,11,15,11];
keys.forEach(key => tree.insert(key));

console.log("Inorder Traversal:");
tree.inorderTraversal(tree.root);
tree.deleteNode(tree.root,110)
console.log("Inorder Traversal:");
tree.inorderTraversal(tree.root);

/*
                                        1
                                            2 
                                                3
                                                    14
                                                5            16
                                                    6     15
                                                        7
                                                            8
                                                                9
                                                                    11
                                                                        11



*/                     



