let arry = [13, 15, 23, 4, 56, 87, 103, 13]

function isLargeNumber(element){
    return element > 100
}

console.log(arry.findIndex(isLargeNumber));