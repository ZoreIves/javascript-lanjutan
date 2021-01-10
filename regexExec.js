function regexExec(){
    var data  = "Belajar Javascript regEx exec"

    var str = new RegExp("regEx")
    console.log(str.exec(data));
}

regexExec()