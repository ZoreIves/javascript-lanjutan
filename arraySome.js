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

console.log(orang.some(orang => orang.genre === "female"));