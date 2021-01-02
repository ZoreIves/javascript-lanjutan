function fungsiNumber(){
    let a = "32"
    let b = 8

    let total = Number(a) + b;
    // let total = a + b;

    console.log((total));
    console.log(typeof(total));
}

// Menggunakan Parse Integer
function fungsiParseInt(){
    let a = "34.66"
    let b = "178 cm"
    let c = "56.2 kg"

    nilaiA = parseInt(a)
    console.log(nilaiA);

    nilaiB = parseInt(b)
    console.log(nilaiB);

    nilaiC = parseFloat(c)
    console.log(nilaiC);
}

fungsiNumber()
fungsiParseInt()