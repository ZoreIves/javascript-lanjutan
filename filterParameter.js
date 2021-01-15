function filterParameter(value){
    var arr = [
        {negara : "indonesia", benua: "Asia"},
        {negara : "Jerman", benua: "Eropa"},
        {negara: "Spanyol", benua:"Eropa"},
        {negara: "Korea", benua: "Asia"},
        {negara:"Portugal", benua:"Eropa"},
        {negara:"Amerika", benua: "Eropa"}

    ]
    var benuaAsia = arr.filter(function(item){
        return item.benua === "Asia"
    });
    var benuaEropa = arr.filter(function(item){
        return item.benua === "Eropa"
    })

    console.log(benuaAsia);
    console.log(benuaEropa);

    benuaAsia
}

console.log(filterParameter());
