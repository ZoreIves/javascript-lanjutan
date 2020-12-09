function fungsiSplice(){
    var arry = ["bekasi", "jakarta", "Jogja", "klaten"]
    console.log(arry);

    arry.splice(2,0, "karang asem")
    return arry
}

console.log(fungsiSplice());
