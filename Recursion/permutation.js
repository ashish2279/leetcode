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


function perm3(arr, aux, ans) {
    if (arr.length === 0) {
      ans.push(aux.slice());
      return;
    }
  
    for (let i = 0; i < arr.length; i++) {
      if (i > 0 && arr[i] === arr[i - 1]) {
        continue;
      }
  
      let newArr = arr.slice(0, i).concat(arr.slice(i + 1));
      let newAux = aux.concat(arr[i]);
  
      perm3(newArr, newAux, ans);
    }
  }

let str = '141'
let ans = [];
let vis = Array(str.length).fill(false);
perm(str.split(''),vis,[],ans)
console.log(ans)



perm2(str.split(''),0,ans)
console.log(ans)
ans = []
perm3([1,1,4],[],ans)
console.log(ans)