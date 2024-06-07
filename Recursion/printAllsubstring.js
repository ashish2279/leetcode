function print(str, i, aux) {
    if(i==str.length)
        {
            console.log(`{${aux.join(',')}}`);
            return;
        }
    aux.push(str[i]);
    print(str,i+1,aux);
    aux.pop();
    print(str,i+1,aux)

}


function count(str, i, aux,k) {
    if(i==str.length)
        {
            if(aux.length === k)
                {
                    console.log(aux.join(''));
                    return 1;
                }
            else
                return 0;
        }
    aux.push(str[i]);
    let take = count(str,i+1,aux,k);
    aux.pop();
    let not_take = count(str,i+1,aux,k)

    return take + not_take;

}

function sum(str, i, aux,k) {

    if(i>str.length)
        {
           return;
        }

        if(k==0)
            {
                console.log(aux);
                return;
            }
 
    aux.push(str[i]);
    k -= str[i]
    sum(str,i+1,aux,k);
    aux.pop();
    k += str[i]
    sum(str,i+1,aux,k)

}
let str = 'ASH'

print(str,0,[]);
console.log(count(str,0,[],2))

let arr = [1,2,3,4,5];
sum(arr, 0, [], 5, {sum:0})