function perm (str, vis, aux,ans) {
    if(aux.length === str.length)
        {
            ans.push(aux.slice())
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

let str = '1234'
let ans = [];
let vis = Array(str.length).fill(false);
perm2(str.split(''),0,ans)
console.log(ans)