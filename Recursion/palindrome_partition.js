function isPalindrome(str) {
    
    if(str.length === 1)
        return true;

    let i=0;
    let j = str.length -1;

    while(i<j) {
        if(str[i]!=str[j])
            return false;
        i++;
        j--;
    }

    return true;
}



function countPartition(unprocessed) {

    if(unprocessed.length ==0)
        {return 0;}

    if(unprocessed.length ===1 || isPalindrome(unprocessed)) {
        return 0;
    }

     let ans = Number.MAX_VALUE, count;
    for (let k=1;k<unprocessed.length;k++) {
        let first = unprocessed.substring(0,k);
        let second = unprocessed.substring(k);
        count = countPartition(first) + countPartition(second) + 1;
        ans  = Math.min(ans,count)
        
    }

    return ans;
}

let str = "abcdc";
let path =[]
console.log(countPartition(str))
