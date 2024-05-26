const t9Mapping = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
};
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

    addwords(node, path,  words) 
        {
            if(node.eow) {
                words.push(path.join(''))
            }

            for (let child in node.children) {
                path.push(child);
                this.addwords(node.children[child],path,words)
                path.pop()
            }
        }
    printAllWords() {

        let words = []
        let path = []
        this.addwords(this.root,path,words)
        console.log("words stored are : %j",words)
    }

    printAllWordsStartingwith(prefix) {
        
        let node = this.root
        for (let char of prefix) {
            if (!node.children[char]) {
                return;
            }
            node = node.children[char]
        }
        let words = []
        let path = Array.from(prefix)
        this.addwords(node,path,words)
        return words;
    }


    t9words(code) {

        const digitsToWords  = (digits) => {
            if(digits.length === 0) {
                return ['']
            }
        let firstDigit = digits[0];
        let restOfChars = digits.slice(1);
        const suffixes = digitsToWords(restOfChars);
        const subwords = [];
        const charsfromDigit = t9Mapping[firstDigit]
        
        for (let char of charsfromDigit) {
            for (let suffix of suffixes) {
                subwords.push(char + suffix)
            }
        }

        return subwords
    }
    let prefixes = digitsToWords(code);
    const possiblewords = new Set()
    for (let prefix of prefixes) {
        const words = this.printAllWordsStartingwith(prefix)
        if (words) {
            for (let word of words){
                possiblewords.add(word)
            }
        }

    }
    return possiblewords
    }
}

let T= new Trie()
T.insertNode('mango')
// console.log(T.findword('banan'))
T.insertNode('apple')
T.insertNode('manga')
// console.log(T.findword('mango'))
// console.log(T.wordsStarting('man'))
//T.printAllWords()
// T.printAllWordsStartingwith('mang')
console.log(T.t9words('62'))
