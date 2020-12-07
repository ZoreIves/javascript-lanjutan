function fungsiPop(){
    var arry = ["bekasi", "jakarta", "Jogja", "klaten"]
    console.log(arry);

    arry.pop() // Kebalikan dari shift, untuk menghapus value array paling akhir
    return arry
}

console.log(fungsiPop());