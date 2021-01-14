function fungsiForEach(){
    let data = ["data1", "data2", "data3"]
    data.forEach(function(item, index, array){
        console.log(item);
        console.log(index);
        console.log(array);
    })
}

fungsiForEach()