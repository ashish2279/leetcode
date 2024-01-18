/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(n) {

  let arr = [[1]]
  for (let i=1;i<n;i++)  {
      arr[i]= []
      arr[i][0] = 1
      for(let j=0;j<i-1;j++)
        {
            arr[i].push(arr[i-1][j]+arr[i-1][j+1])
        }
      arr[i].push(1)
  
}
return arr
};
