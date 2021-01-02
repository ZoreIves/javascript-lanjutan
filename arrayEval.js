function arryEval(){
    let dev = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    let total = 0;

    for(i=0; i<dev.length; i++){
        total += dev[i];
    }
    console.log(eval(total));
}

arryEval()