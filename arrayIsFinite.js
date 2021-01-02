function arryIsFinite(){
    let a = isFinite([1,2,3,4,5,6])
    let b = isFinite(["jakarta", "Bekasi", "Klaten"])
    let c = isFinite([3,4,6,7,9, "Bekasi"])
    let d = isFinite(-8.8)

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

arryIsFinite()
