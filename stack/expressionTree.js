class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
function isOperator(ch) {
    return ch =='+' || ch == '-' || ch == '*' || ch == '/'
}

class ExpressionTree{
    constructor() {
        this.root = null;
    }

    buildTree(postfix) {
        let exp = []
        for(let ch of postfix) {
            if (isOperator(ch)) {
                let node  = new TreeNode(ch);
                node.right = exp.pop();
                node.left = exp.pop();
                exp.push(node)
            } else {
                let node  =  new TreeNode(ch);
                exp.push(node);
            }
        }
        this.root = exp.pop()
        
    }
    inorderTraversal(root=this.root) {
        if (root === null) {
            return '';
        }
        return  this.inorderTraversal(root.left) + ' ' + root.val + ' ' + this.inorderTraversal(root.right);
    }

    evaluate(root=this.root) {
        if(root == null)
            return 0;
        if(root.left == null && root.right == null )
            return Number(root.val);
        let val1 = Number(this.evaluate(root.left));
        let val2 = Number(this.evaluate(root.right));
        return this.calculate(val1,val2,root.val);
    }

    calculate(first, sec, operator) {
            switch (operator) {
                case '+': return first + sec ;
                case '-': return first - sec ;
                case '*': return first * sec ;
                default: return val = first / sec ; // this might vary from question to question if they want integer devision or not
            }
        }
}


let Tree = new ExpressionTree()
Tree.buildTree('231*+9-');
console.log(Tree.evaluate());
console.log(Tree.inorderTraversal())