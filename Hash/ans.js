let m = new Map()

function findPair (arr) {

    let res = []
    for (let pair of arr) 
        {
            if (m.get(pair[1]) === pair[0])
                {
                    res.push(pair)
                }
            else {
                m.set(pair[0], pair[1])
            }
        }

    console.log("res ", res)
}


let m2 = new Map()


function isSubset(arr1, arr2) {
    for (let ele of arr2) {
        m2.set(ele, 1)
    }

    for (let ele of arr1) {
        if(!m2.get(ele))
            return false
    }

    return true;
}


function isDisjoint(arr1, arr2) {
    for (let ele of arr2) {
        m2.set(ele, 1)
    }

    for (let ele of arr1) {
        if(m2.get(ele))
            return false
    }

    return true;
}


let arr = [[1,2], [3,4], [2,1]]

findPair(arr)


let arr1 = [11,9,12];
let arr2=[2,4,3,1,7,5,15]
console.log(isSubset(arr1, arr2))

console.log(isDisjoint(arr1, arr2))