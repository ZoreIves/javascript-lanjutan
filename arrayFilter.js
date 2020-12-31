let orang = [
    {
        nama : "Clark",
        genre : "female"
    },
    {
        nama : "Bellamy",
        genre : "male"
    },
    {
        nama : "Monthy",
        genre : "male"
    }
]

let lanang = orang.filter(orang => {
    return orang.genre === "male"
})
let wadon = orang.filter(orang => {
    return orang.genre === "female"
})

// console.log(lanang);
console.log(wadon);
