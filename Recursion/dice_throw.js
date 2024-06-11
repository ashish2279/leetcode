function dice(arr, N,target,ans) {
    // console.log("arr  :%j \t N : %j \t target : %j",arr, N , target)
    if(arr.length === N) {
        if(target === 0)
            {
                ans.val ++;
            };
        return;
    }

for (let i=1;i<=k && i<=target;i++){
    arr.push(i);
    dice(arr, N, target - i ,ans);
    arr.pop();
}

    
    
}


let n=2;
let k=6;
let ans = {val : 0}
dice([], n, 7, ans)
console.log(ans.val)        