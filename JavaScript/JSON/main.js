fetch("data.json")
.then(res => res.json()
.then(data => Display(data.flip))
)
function Display(datas){
    var main = document.querySelector(".main")
    // console.log(datas)
    for (var i in datas){
        var chaild = document.createElement("div")
        chaild.classList.add("chaild")
        main.appendChild(chaild)
        var img = document.createElement("img")
        img.src = datas[i].image
        chaild.appendChild(img)
        var h1 = document.createElement("h1")
        h1.textContent = datas[i].name
        chaild.appendChild(h1)
        var h6 = document.createElement("h6")
        h6.textContent = datas[i].pri
        chaild.appendChild(h6)


    }
}