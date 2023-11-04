const box = document.querySelector(".box")
const box1 = document.querySelectorAll(".box1")
const h2 = document.querySelectorAll("h2")

for (let i = 0; i < h2.length; i++) {
    h2[i].addEventListener("click",function () {
        box1[i].classList.toggle("active")
        
    })
    
}
