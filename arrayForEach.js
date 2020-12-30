function arrayForEach(){
    var arry = ["23", "44", "54", "76", "91", "43"]

    arry.forEach(function(item, index, data){
        console.log(item);
        console.log(index);
        console.log(data);
    })
}

arrayForEach()