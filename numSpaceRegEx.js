function numSpace(y){
    let data = y.match(/\w/g) // regex w : untuk menampilkan semua karakter
    let data2 = y.match(/\d/g) // regex d : untuk menampilkan angka
    let spasi = y.match(/\s/g) // regex s : untuk menampilkan spasi

    console.log(data);
    console.log(data2);
    console.log(spasi)
    console.log("Banyak sepasi : ", spasi.length);;
}

numSpace("Bulan ke 4 sd ke 8")