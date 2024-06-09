function remove(str, ch) {
    if(str === '')
        return '';

    if (str[0] === ch) {
        return remove(str.slice(1),ch)
    } else {
        return str[0] + remove(str.slice(1),ch)
    }
}


function removeWord(str, word) {
    if(str === '')
        return '';

    let lowerCaseStr = str.toLowerCase()
    let lowerWord = word.toLowerCase()

    
    if (lowerCaseStr.startsWith(lowerWord)) {
        return removeWord(str.slice(word.length),word)
    } else {
        return str[0] + removeWord(str.slice(1),word)
    }
}
// another vraiance could be to remove certain words, in that case you need to use str.Startswith 
let str = 'Ashish';

console.log(remove(str, 'h'))



let str2 = 'Remove Apple from this sentence there should not be any apple in this';
word = 'Apple'

console.log(removeWord(str2,word))