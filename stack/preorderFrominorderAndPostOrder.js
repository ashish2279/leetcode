
class Node {
    constructor(data) {
        this.val = data;
        this.left = null;
        this.right= null;
    }
    
    
}




function preorderTraversal(root) {
    if (root === null) {
        return '';
    }
    return root.val + '->' + preorderTraversal(root.left) +preorderTraversal(root.right);
}

function buildTree(inorder, postorder) {
    if (inorder.length === 0 || postorder.length === 0) {
        return null;
    }

    const rootVal = postorder.pop();
    const root = new Node(rootVal);
    const rootIndex = inorder.indexOf(rootVal);

    root.right = buildTree(inorder.slice(rootIndex + 1), postorder);
    root.left = buildTree(inorder.slice(0, rootIndex), postorder);

    return root;
}

function preOrderFromInorder(inorder, postOrder) {
   let root = buildTree(inorder.split('->'),postOrder.split('->'))
   return preorderTraversal(root)
}


let inord = "4->5->6->7->10->11->12->13->14->15->19->20->30->40->50"
let post =  "4->6->7->5->11->13->19->15->30->40->50->20->14->12->10"
console.log(preOrderFromInorder(inord,post))