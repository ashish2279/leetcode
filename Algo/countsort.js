function sort(arr) {

    let maxEle = 0;
    let n = arr.length

    for (let num of arr)
        maxEle = Math.max(maxEle, num);

    let countArray = Array(maxEle + 1).fill(0);

    for (let i =0 ;i <n;i++)
        {
            countArray[arr[i]] ++;
        }
        let k =0;
    for (let i=0;i<=maxEle;i++) {
        while(countArray[i]) {
            arr[k++] = i;
            countArray[i] --;
        }
    }


}



let arr = [0,4,3,2,1,2,1,9,9,9,8,3,3,3,3,3,32]
sort(arr);
console.log(arr)