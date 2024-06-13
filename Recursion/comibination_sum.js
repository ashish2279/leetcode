// function combination_sum(arr, i, aux, target) {

//     if(target === 0) {
//         console.log(aux);
//         return;
//     }
//     if(i >= arr.length || target<0){
//         return;
//     }
//     if(arr[i] <= target) {
//         aux.push(arr[i]);
//         combination_sum(arr, i, aux, target - arr[i]);
//         aux.pop();
//     }
    
//     combination_sum(arr, i+1, aux,target)

// }


function combination_sum(arr, aux, target,ans) {
    if(target === 0) {
        ans.push(aux.slice())
        return;
    }

    if(arr.length === 0 || target<0){
        return;
    }
    
    if(arr[0] <= target) {
        aux.push(arr[0]);
        combination_sum(arr, aux, target - arr[0],ans);
        aux.pop();
    }
    
    combination_sum(arr.slice(1), aux,target,ans)

}
let arr = [1,2,3,4,5,6,7];
arr.sort()
let ans =[]
combination_sum(arr,[],7,ans)

console.log("printing ans ",ans)



/*


target =7
[
  [1, 1, 1, 1,1, 1, 1],
  [ 1, 1, 1, 1, 1, 2 ],
  [ 1, 1, 1, 1, 3 ],
  [ 1, 1, 1, 2, 2 ],
  [ 1, 1, 1, 4 ],
  [ 1, 1, 2, 3 ],
  [ 1, 1, 5 ],
  [ 1, 2, 2, 2 ],
  [ 1, 2, 4 ],
  [ 1, 3, 3 ],
  [ 1, 6 ],
  [ 2, 2, 3 ],
  [ 2, 5 ],
  [ 3, 4 ],
  [ 7 ]
]


*/