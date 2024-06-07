// find all the uniquw combination that equals to target sum
function combination_sum(arr, i, aux, target) {

    if(target === 0) {
        console.log(aux);
        return;
    }
    if(i >= arr.length || target<0){
        return;
    }
    for (let ind =i ;ind <arr.length;ind++){
        if (ind > i && arr[ind] == arr[ind-1])
            continue;
        if(arr>target)
            break;
            aux.push(arr[ind]);
            combination_sum(arr, ind+1, aux, target - arr[ind]);
            aux.pop();
    }


}

let arr = [1,1,1,1,2,3,4,5,6,7];
arr.sort();
combination_sum(arr,0,[], 7)