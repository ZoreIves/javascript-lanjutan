let arry = [[3,1], [4,2], [5,0]].reduceRight(
    (preValue, currentValue) => preValue.concat(currentValue)
    )
    
console.log(arry);