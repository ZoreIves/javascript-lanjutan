function genap(){
    let bilanganGenap = []

    for (let i = 1; i < 30; i++) {
        if(i%2 === 0){
            bilanganGenap.push(i)
        }
    }
    return bilanganGenap
}

console.log(genap());