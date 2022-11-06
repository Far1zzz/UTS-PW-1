



let txtNamaLengkap = document.getElementById("nama")
let txtEmail = document.getElementById("email")
let txtTestimon = document.getElementById("testimoni")
let listTesti = document.getElementById ("listTestimoni1")

let data = []
tampil()

function send(){
    console.log("Data terkirim")

    console.log(txtNamaLengkap.value)
    console.log(txtEmail.value)
    console.log(txtTestimon.value)

    if(localStorage.getItem("lsTesti")===null){
        data.push({"nama": txtNamaLengkap.value, "email": txtEmail.value, "testimoni": txtTestimon})

        localStorage.setItem("lsTesti", JSON.stringify(data))
    }else{
        let dataLs = JSON.parse(localStorage.getItem("lsTesti"))
        console.log(dataLs)

        dataLs.push({"nama": txtNamaLengkap.value, "email": txtEmail.value, "testimoni": txtTestimon})

        localStorage.setItem("lsTesti", JSON.stringify(dataLs))
    }
    tampil()
}

function tampil(){
    listTesti.innerHTML = ""
    data.forEach(listData)

    let dataTampil = JSON.parse(localStorage.getItem("lsTesti"))
    dataTampil.forEach(listData)
}

function listData(item, index){
    listTesti += "<li>" + item.nama + "-" + item.email +"-"+ item.testimoni + "</li>"
}