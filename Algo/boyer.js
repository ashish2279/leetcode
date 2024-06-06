function majorityElement(arr) {
    let n = arr.length;
    let votes = 0;
    let candidate = -1;

    for (let char of arr) {
        if (votes === 0) {
            candidate = char;
            votes++;
        } else {
            if (char === candidate) {
                votes++;
            } else {
                votes--;
            }
        }
    }

    let count = 0;
    for (let char of arr) {
        if(char === candidate)
            count++;
        if(count > Math.floor(n/2))
            return candidate;
    }

    return -1
}

let arr = [1,1,1,1,2,2,3,4,1]
console.log("Majority element is %j",majorityElement(arr))