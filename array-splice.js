function fungsiSplice(){
    var arry = ["bekasi", "jakarta", "Jogja", "klaten"]
    console.log(arry);

    // arry.splice(2,0, "karang asem") // Menambah data menggunakan splice sesuai lokasi yang dippilih
    arry.splice(1,3) // Menghapus data pada lokasi yang ditentukan dan jumlahnya berapa
    return arry
}

console.log(fungsiSplice());
