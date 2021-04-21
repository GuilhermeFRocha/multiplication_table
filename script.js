function teste() {
    let numero = window.document.getElementById("number")
    let res = window.document.getElementById("text")
    let n1 = Number(numero.value)    

    if (n1.length == 0) {
        alert("Por favor, digite um numero!")
    } else {
        let c = 1
        res.innerHTML = ""
        while (c <= 10) {
            let item = document.createElement('option')
            item.text =  `${n1} x ${c} = ${n1*c}` 
            res.appendChild(item)
            c++
        }
    }

}