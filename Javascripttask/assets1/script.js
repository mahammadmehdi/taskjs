const container = document.querySelector(".container")
const btn = document.querySelectorAll("button")
const image = document.querySelectorAll("img")

// btn1.addEventListener("click", function () {
//     image1.style.filter="blur(0px)"
//     btn1.style.display="none"
// })
// btn2.addEventListener("click", function () {
//     image2.style.filter="blur(0px)"
//     btn2.style.display="none"
// })
// btn3.addEventListener("click", function () {
//     image3.style.filter="blur(0px)"
//     btn3.style.display="none"
// })
// btn4.addEventListener("click", function () {
//     image4.style.filter="blur(0px)"
//     btn4.style.display="none"
// })
//  for (let i = 0; i < btn.length; i++) {
//     btn[i].addEventListener("click", function () {
//     image[i].style.filter="blur(0px)"
//     btn[i].style.visibility="hidden"
    
//     }
//     )}
    
    const arr = [{text:"salam"}, {text:"sagol"}]
// localStorage.setItem("arr",JSON.stringify(arr))
// localStorage.getItem(arr)

SetLocalStorage("salam",arr)
console.log(GetLocalStorage("salam"));

function SetLocalStorage(key,value) {
   localStorage.setItem(key,JSON.stringify(value))
   
}

function GetLocalStorage(key) {
   return JSON.parse(localStorage.getItem(key))
}