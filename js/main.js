let nameInput=document.getElementById("bookMarkname")
let urlInput=document.getElementById("bookMarkURL")
let val=document.getElementById("val")
let btn=document.getElementById("btn")
let weblist = [];
if (localStorage.getItem("List") != null) {
    weblist = JSON.parse(localStorage.getItem("List"))
    displayData()
}
function deleteProduct(index) {
    weblist.splice(index, 1)
    localStorage.setItem("List", JSON.stringify(weblist))
    displayData()
}
function displayData() {
    var temp = ""
    for (var i = 0; i < weblist.length; i++) {
        temp += ` <tr>
        <td>`+ i + `</td>
        <td>`+ weblist[i].name + `</td>
        
        <td>
            <button onclick="visit(`+ i + `)"  class="btn btn-success  type="button" "><i class="fa-regular fa-eye"></i> visit</button>
        </td>
        <td>
            <button onclick="deleteProduct(`+ i + `)"  class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delete</button>
        </td>
              </tr>`
    }
    document.getElementById("tableBody").innerHTML = temp
}

function addProduct() {
    var wbsite = {
        name: nameInput.value,
        URL: urlInput.value,
       
    }
    weblist.push(wbsite)
    localStorage.setItem("List", JSON.stringify(weblist))
    displayData()
}

    if(urlInput != "" &&nameInput !=""){
        btn.classList.remove("d-none")
        btn.classList.add("d-block")
        val.classList.add("d-none")
       val.classList.remove("d-block")
    }else{
        btn.classList.remove("d-block")
        btn.classList.add("d-none")
        val.classList.add("d-block")
        val.classList.remove("d-none")
    }

function nameregex(){
    namecheck= /[A-Za-z]/
    if (namecheck.test(nameInput.value)==true && urlInput != "" &&nameInput!="") {
        nameInput.classList.add("is-valid")
        nameInput.classList.remove("is-invalid")
        btn.classList.remove("d-none")
        btn.classList.add("d-block")
        val.classList.add("d-none")
       val.classList.remove("d-block")
    }else{
        btn.classList.remove("d-block")
        btn.classList.add("d-none")
        val.classList.add("d-block")
        val.classList.remove("d-none")
 
    }

}  
function urlregex(){
    urlcheck= /^(ftp|http|https):\/\/[^ "]+$/
    if (urlcheck.test(urlInput.value)==true && nameInput != "" &&urlInput!="") {
        urlInput.classList.add("is-valid")
        urlInput.classList.remove("is-invalid")
        btn.classList.remove("d-none")
        btn.classList.add("d-block")

        val.classList.add("d-none")
       val.classList.remove("d-block")
    }else{
       btn.classList.remove("d-block")
       btn.classList.add("d-none")
       val.classList.add("d-block")
       val.classList.remove("d-none")

      }
}  

function visit(){
    window.location.href=urlInput.value
}
