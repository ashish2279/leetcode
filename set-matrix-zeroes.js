/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(arr) {
    let m= arr.length
    let n = arr[0].length
    let firstrow = 1,firstcolumn=1
    if(arr[0][0] ==0)
    {
       firstrow=0;
       firstcolumn=0 
    }
    for (let i=1;i<m ;i++)
    {
        let ele = arr[i][0]
        if(ele==0)
                firstcolumn=0
       for (let j = 1;j<n;j++)
            if(arr[i][j]==0)
            {
                arr[i][0] = 0 
                break;
            }
            

            
            console.log("ele  ",arr[i][0])
    }
    
    for (let j=1;j<n ;j++)
    {
        let ele = arr[0][j]
         if(ele===0)
                firstrow=0
       for (let i = 1;i<m;i++)
            if(arr[i][j] ==0)
               {arr[0][j] = 0; break;}

                console.log("ele2  ",arr[0][j])
    }

    for (let i =1;i<m;i++) 
    {
        if(arr[i][0] == 0)
            {
                
                for (let j = 1;j<n;j++)
                    arr[i][j] = 0
            }
    }

    for (let j =1;j<n;j++) 
    {
        if(arr[0][j] == 0)
            {
                for (let i = 1;i<m;i++)
                    arr[i][j] = 0
            }


    }
    
    if(!firstrow)
        for(let j=0;j<n;j++)
            arr[0][j] = 0

    if(!firstcolumn)
        for(let i=0;i<m;i++)
            arr[i][0]=0

};
