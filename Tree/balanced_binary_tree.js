class Node {
    constructor(key) {
        this.val = key;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let node = new Node(data)

        if (this.root==null)
            {
                this.root = node;
                return;
            }
        let queue = [this.root];
        while (queue.length)
            {
                let temp = queue.shift();
                if(temp.left === null)
                    {
                        temp.left = node;
                        break;
                    }
                else if(temp.right === null)
                    {
                        temp.right = node ;
                        break;
                    }
                else {
                    queue.push(temp.left);
                    queue.push(temp.right);
                }
            } 
    }

    inorderTraversal(node) {
        if (node) {
            this.inorderTraversal(node.left);
            console.log(node.val);
            this.inorderTraversal(node.right);
        }
    }
}

// Example usage:
const tree = new BinaryTree();
const keys = [1, 2, 3, 4, 5, 6, 7];
keys.forEach(key => tree.insert(key));

console.log("Inorder Traversal:");
tree.inorderTraversal(tree.root);
