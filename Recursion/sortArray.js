function insert_at_merged(arr, val) {
    if(arr.length === 0 || arr[arr.length - 1] < val) {
        arr.push(val)
    } else {
        let temp =  arr.pop();
        insert_at_merged(arr, val);
        arr.push(temp);
    }
}


function sort(arr) {

    if(arr.length === 0) {
        return;
    }
    let a  = arr.pop();
    sort(arr);
    insert_at_merged(arr,a);


}


let arr  = [5,4,1,7,8];
sort(arr);
console.log(arr)