var x = "Belajar Token regEx \n Javascript di niomic."
var y = /./g;
console.log(x.match(y));

let x1 = "token..."
let y2 = /\./g;
console.log(x1.match(y2));

let data = "data acak 0871_54378 !23@_*&^-"

//angka 
console.log(data.match(/\d/g));

// Selain angka
console.log(data.match(/\D/g));

// Angka, Huruf dan underscore
console.log(data.match(/\w/g));

// Selain angka, huruf dan underscore
console.log(data.match(/\W/g));

// Whitespace
console.log(data.match(/\s/g));


