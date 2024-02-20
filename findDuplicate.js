function findDuplicate(nums)
{
let arraySum = 0;
let sqrSum = 0;
let Nsum = 0;
let N2sum = 0 ;
let ans  = 0 ;

for(let i=0;i<100;i++){
      Nsum +=  i+1
      N2sum += (i+1) * (i+1) 
      arraySum += nums[i]
      sqrSum +=  nums[i] * nums[i]
  }
      
return 1/2 * ((N2sum - sqrSum )/ (Nsum - arraySum) - (Nsum - arraySum))
}


function main() 
{
  let nums = []

  for (let i=0;i<100;i++)
        nums[i]  = i+1

  nums [50] = 63
  console.log("duplicate number is  :%j",findDuplicate(nums))
}


main()
