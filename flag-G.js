function flagG(){
    let data = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
    let data2 = "Belajar Javascript Lanjutan di niomic"
    
    console.log(data.match(/c/));
    console.log(data2.match(/di/g));
}

flagG()