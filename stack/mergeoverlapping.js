class Interval {
    constructor(start,end) {
        this.start = start;
        this.end = end;
    }
}

function isoverlapping(a,b) {
    return b.start <= a.end
}


function merge(a ,b) {
    return new Interval(Math.min(a.start,b.start),Math.max(a.end,b.end))

}
function mergeIntervals(arr) {
    arr.sort((a,b) => a.start - b.start)
    let st = [];

    let n = arr.length;

    st.push(arr[0]) 

    for (let i = 1; i< n ; i++) {
        let top = st[st.length-1];
        if(isoverlapping(top,arr[i])) {
            let merged = merge(arr[i],top)
            st.pop();
            st.push(merged)
        } else{
            st.push(arr[i])
        }
    }

    console.log(st)
}
let arr = [new Interval(1,3), new Interval(8,10), new Interval(2,6), new Interval(15,18)];

mergeIntervals(arr)

