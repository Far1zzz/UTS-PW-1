



let txtNamaLengkap = document.getElementById("nama")
let txtEmail = document.getElementById("email")
let txtTestimon = document.getElementById("testimoni")
let card = document.getElementById("crd")
let data = []

tampil()

function send(){
    console.log(txtNamaLengkap.value)
    console.log(txtEmail.value)
    console.log(txtTestimon.value)

    if(localStorage.getItem("lsTesti")===null){
        data.push({
        nama: txtNamaLengkap.value,
        email: txtEmail.value, 
        testimoni: txtTestimon.value
    })

    localStorage.setItem("lsTesti", JSON.stringify(data))
    }else{
        let dataLs = JSON.parse(localStorage.getItem("lsTesti"))
        console.log(dataLs)

        dataLs.push({
            nama: txtNamaLengkap.value, 
            email: txtEmail.value,
            testimoni: txtTestimon.value
        })

        localStorage.setItem("lsTesti", JSON.stringify(dataLs))
    }
    tampil()
}

function tampil(){
    data.forEach(listData)
    card.innerHTML = ""

    let dataTampil = JSON.parse(localStorage.getItem("lsTesti"))
    dataTampil.forEach(listData)
}

function listData(item, index){
    card.innerHTML += `
    <div class = "col-8 col-lg-6" >
      <div class = "card mb-2" style = "width: 35rem;" >
        <div class = "card-body" >
          <h5 class = "card-title" >${item.nama}</h5> 
          <h6 class = "card-subtitle mb-2 text-muted">${item.email}</h6>
          <p class = "card-text" >${item.testimoni}</p> 
        </div> 
      </div> 
    </div>`
}