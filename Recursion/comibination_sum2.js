// find all the unique combination that equals to target sum
function combination_sum(arr, aux, target) {

    if(target === 0) {
        console.log(aux);
        return;
    }
    if(arr.length === 0 || target<0){
        return;
    }
    for (let ind =0 ;ind <arr.length;ind++){
        if (ind > 0 && arr[ind] == arr[ind-1])   /// this is to avoid duplicates
            continue;

        if(arr>target)
            break;
            aux.push(arr[ind]);
            combination_sum(arr.slice(ind+1), aux, target - arr[ind]);
            aux.pop();
    }


}

let arr = [1,1,1,1,2,3,4,5,6,7];
arr.sort();
combination_sum(arr,[], 7)

/*
subset sum with unique element
target = 7
[ 1, 1, 1, 1, 3 ]
[ 1, 1, 1, 4 ]
[ 1, 1, 2, 3 ]
[ 1, 1, 5 ]
[ 1, 2, 4 ]
[ 1, 6 ]
[ 2, 5 ]
[ 3, 4 ]
[ 7 ]

*/