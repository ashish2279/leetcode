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


function combination_sum(arr, i, aux, target,ans) {
    if(target === 0) {
        ans.push(aux.slice())
        console.log(aux)
        return;
    }

    if(i >= arr.length || target<0){
        return;
    }
    
    if(arr[i] <= target) {
        aux.push(arr[i]);
        combination_sum(arr, i, aux, target - arr[i],ans);
        aux.pop();
    }
    
    combination_sum(arr, i+1, aux,target,ans)

}
let arr = [1,2,3,4,5,6,7];
arr.sort()
let ans =[]
combination_sum(arr,0,[],7,ans)

console.log("printing ans ",ans)