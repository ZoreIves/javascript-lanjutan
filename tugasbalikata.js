function balikKata(Kata){
  var newKata = ""
  for (let i = Kata.length -1; i >= 0; i--) {
    //   newKata += Kata[i];
      newKata = newKata + Kata[i]

    
    }
return newKata;
  
}

console.log(balikKata("Niomic!"));
console.log(balikKata("Purbalingga!"));
console.log(balikKata("Klaten!"));