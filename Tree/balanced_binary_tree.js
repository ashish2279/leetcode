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

    findheight(node) {
        if(!node)
            return 0;
        else 
            return 1 + Math.max(this.findheight(node.left),this.findheight(node.right))

    }
}

// Example usage:
const tree = new BinaryTree();
const keys = [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14,15,16];
keys.forEach(key => tree.insert(key));

console.log("Inorder Traversal:");
tree.inorderTraversal(tree.root);

console.log("Height of tree is : %j",tree.findheight(tree.root))
