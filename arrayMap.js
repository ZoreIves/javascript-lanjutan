function arrayMap(){
    var data = ["Bekasi", "Jakarta", "Klaten"]

    data.map(function(value, index, data){
        console.log(value);
        console.log(index);
        console.log(data);
    })
}

arrayMap()