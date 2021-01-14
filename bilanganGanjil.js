function ganjil(){
    let bilanganGanjil = []

    for (let i = 1; i < 30; i++) {
        if(i%2 !== 0){
            bilanganGanjil.push(i)
        }
    }
    return bilanganGanjil
}

console.log(ganjil());