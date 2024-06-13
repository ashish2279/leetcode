function NCR(processed, unprocessed, k){
    //  console.log(processed,unprocessed,k)

    if(processed.length === k) {
        console.log(processed);
        return;
    }

    for (let i = 0;i<unprocessed.length; i++) {
        if( i>0 && unprocessed[i-1] == unprocessed[i])
            continue;
        processed.push(unprocessed[i])
        NCR(processed,unprocessed.slice(i+1),k)
        processed.pop()
    }
}

let arr = [1,2,3,4,5]

arr.sort();
NCR([],arr,3)