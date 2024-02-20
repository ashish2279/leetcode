function findMissing(nums)
{
let arraySum = 0;
  for(let i=0;i<100;i++)
      arraySum += i +1 - nums [i]
return arraySum
}

function main() 
{
  let nums = []

  for (let i=0;i<100;i++)
        nums[i]  = i+1

  nums [50] = 0

  console.log("mising number is  :%j",findMissing(nums))
}


main()
