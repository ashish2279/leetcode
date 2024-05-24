
class Node {
    constructor() {
        this.eow = false;
        this.children =  {}
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }

    insertNode(word) {
        let node = this.root;

        for (let char of word)
            {
                if(!node.children[char]) {
                    node.children[char] = new Node()
                }
                node  = node.children[char]
            }
        node.eow = true

    }

    findword(word) {
        let node = this.root;
        for (let char of word)
            {
                if(!node.children[char]) {
                    return false;
                }
                node  = node.children[char]
            }
        return node.eow

    }

    wordsStarting(word) {
        let node = this.root;
        for (let char of word)
            {
                if(!node.children[char]) {
                    return false;
                }
                node  = node.children[char]
            }
        return true
    }
}

let T= new Trie()
T.insertNode('apple')
console.log(T.findword('banan'))
T.insertNode('mango')
console.log(T.findword('mango'))
console.log(T.wordsStarting('man'))
