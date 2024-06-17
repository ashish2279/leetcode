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
    printStack(stack){
        let output="";
        for ( let i = 0 ; i < stack.length ; i ++){
            let node = stack[i];
            output = output+node.val+",";
        }
        console.log(output);
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

    inorderIterative() {
     // left -> root -> right
        let root = this.root;
        if(!root)
            return; 
        let stack = [];
        let result = ""
        let curr = root;
        while (curr || stack.length) {
            while (curr)
                {
                    stack.push(curr)
                    curr = curr.left; // for traversing left most element 
                }
            curr = stack.pop(); // now take the element and print it
             result += curr.val +  "->"
            curr = curr.right; // move to the right subtree 
        }
        console.log(result); 
    }

    preOrderIterative() {
        let root = this.root;
        if (root == null)
            return;
        let stack = []
        stack.push(root)
        let res = ""
        while(stack.length) {
        //    console.log("stack is")
        //     this.printStack(stack)
          let curr = stack.pop()
          res +=  curr.val + "->";
          if(curr.right) {
            stack.push(curr.right)
          }
          if(curr.left) {
            stack.push(curr.left)
          }
          }
        
        console.log("Pre order is ",res)
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

    findLCA( n1, n2) {
        let path1 = []
        let path2 = []
        return this.findLCAutil(this.root, n1, n2, path1 , path2)
    }

    findLCAutil(root, n1,n2,path1,path2) {
        if(!this.findpath(root, path1,n1) || !this.findpath(root, path2, n2))
            {
                console.log("path ",path1)
                console.log("path2 ",path2)
                console.log("Node doesn't exist")
                return -1;
            }
        console.log(" path1 : %j \n path2 :%j",path1,path2)
        
        let i;
        for (i = 0; i < path1.length && i < path2.length; i++) {
              
            if (path1[i] != path2[i])
                break;
        }
  
        return path1[i-1].val;
    }   

    preorderTraversl(node) {
        if (node) {
            console.log(node.val + "  (" + node.level + ") " );
            this.preorderTraversal(node.left);
            this.preorderTraversal(node.right);
        }
    }

    postorderTraversal(node) {
        if (node) {
            this.postorderTraversal(node.left);
            this.postorderTraversal(node.right);
            console.log(node.val + "");
        }
    }

    findKthElement(k) {
        let c = {count :0};
        this.findKthElementUtil(this.root, c, k)
        
    }
    findKthElementUtil(node, c, k) {
        if(!node || c.count>=k)
            return
        this.findKthElementUtil(node.right, c,k)
        c.count++;
        if (c.count===k) {
            console.log(`${k}th largest element is ${node.val}`)
            return;
        }
        this.findKthElementUtil(node.left, c, k)


    }

    postOrderIterative(node) {
        let stack = []
        let stack2 = []
        let root = node || this.root;
        if (root == null)
            return;
        stack.push(root)
        let res = ""
        while(stack.length) {
        //   this.printStack(stack)
          let curr = stack.pop()
          stack2.push(curr)
          
          if(curr.left) {
            stack.push(curr.left)
         }
          if(curr.right) {
            stack.push(curr.right)
          }
        
          }
        
          while(stack2.length) {
           res +=  stack2.pop().val + "->";
          }
        console.log("Post order is ",res)


    }
    findPathToleaf() {
        let root = this.root;
        if (root == null)
            return;
        let stack = []
        stack.push({curr:root, path: []})
        while(stack.length) {

          let { curr, path }= stack.pop();

          let newPath = [...path,curr.val]

          if(!curr.right && !curr.left) {
            console.log("path for leaf : %j for %j",  curr.val,newPath)
          } else {
          if(curr.right) {
            stack.push({curr:curr.right, path: newPath})
          }
          if(curr.left) {
            stack.push({curr:curr.left, path:newPath})
          }
          }
        }
        
    }

}


const tree = new Tree();
 const keys = [1, 2, 3, 14, 5, 6, 7,8,9,16,11,15,11];
//const keys = [10,5,12,4,7,11,14,13,20,15,6,19,50,40,30];
keys.forEach(key => tree.insert(key));
// console.log("Inorder Traversal:");
// //tree.inorderTraversal(tree.root);
// tree.inorderIterative();
// // tree.deleteNode(tree.root,110)
// // console.log("Inorder Traversal:");
// // tree.inorderTraversal(tree.root);
//console.log(tree.findLCA(9,115))
// console.log("Preorder Traversal:");
// tree.preorderTraversal(tree.root)
// tree.preOrderIterative()

// console.log("Post order trversal")
// tree.postorderTraversal(tree.root)
// console.log("Post order Iterative trversal")
// tree.postOrderIterative(tree.root)

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



//tree.findKthElement(2)
tree.findPathToleaf()
