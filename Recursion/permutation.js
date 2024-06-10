function perm (str, vis, aux,ans) {
    if(aux.length === str.length)
        {
            ans.push(aux.join(''))
            return;
        }
    for(let i=0;i<str.length;i++){
        if (!vis[i]) {
            vis[i] = true;
            aux.push(str[i]);
            perm(str, vis, aux, ans);
            aux.pop();
            vis[i] = false;
        }
    }

}

function perm2(arr, ind, ans) {
if(ind === arr.length) {
    ans.push(arr.join(''));
}

for(let i = ind;i<arr.length;i++)
    {
        [arr[i],arr[ind]] = [arr[ind],arr[i]];
        perm2(arr,ind+1,ans);
        [arr[i],arr[ind]] = [arr[ind],arr[i]];
    }

}


function perm3(arr, aux) {
   // console.log("\naux : %j \t arr :%j ",aux.join(''),arr.join(''))
    if(arr.length === 0) {
        console.log(aux.join(''));
        return;
    }

    let ch = arr[0]; 
    //console.log("inserting ",ch)
    for (let i=0;i<=aux.length;i++){
        let first = aux.slice(0,i).join('');
        
        let second = aux.slice(i).join('');
      // console.log("first : %j \t second :%j",first,second)
        let newStr = first + ch + second;
        perm3(arr.slice(1), newStr.split(''))
    }

}

let str = '1234'
let ans = [];
let vis = Array(str.length).fill(false);
perm(str.split(''),vis,[],ans)
console.log(ans)


ans = []
perm2(str.split(''),0,ans)
console.log(ans)

perm3(['a','b','c'],[])