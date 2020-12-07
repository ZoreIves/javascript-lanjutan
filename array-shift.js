function panggilShift(){
    var arry = ["bekasi", "jakarta", "Jogja", "klaten"]
    console.log(arry); // hasil console.log masih utuh

    // arry = arry.shift()
    arry2 = arry.shift() // fungsi shift => untuk menghapus value array di awal

    console.log(arry2); // Hasil console.log sudah terhapus
    return arry

}

console.log(panggilShift());
