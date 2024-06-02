var gen = function(n) {
        for (let i = 0; i < (1 << n); i++) {
            const binaryString = (i >>> 0).toString(2).padStart(n, '0');
            console.log(binaryString);
        }
}


var genFromWildCard = function(str) {
  let strArray = str.split('')
  let indices = []
  
  strArray.forEach((element,index) => {
    if(element == '?')
    indices.push(index)
  });

  let n = indices.length;
  for (let i = 0; i < (1 << n); i++) {
    let temp_str = str.split('');
    const binaryString = (i >>> 0).toString(2).padStart(n, '0');
    for (let j=0;j<n;j++) {
        temp_str[indices[j]] = binaryString[j]
    }

    console.log(temp_str.join(''))
}

}
genFromWildCard('100001?1?11?')