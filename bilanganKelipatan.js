function kelipatan(){
    let data = []
    for (let i = 1; i < 50; i++) {
        if(i%5 === 0){
            data.push(i)
        }
    }
    return data
}

console.log(kelipatan());
