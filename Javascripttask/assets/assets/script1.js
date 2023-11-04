const list = document.querySelector(".nav")
const icon = document.querySelector(".icon")
const btn = document.querySelector("button")

btn.addEventListener("click", function () {
    list.style.transform="translateX(0px)"
    btn.style.transform="translateX(-250px)"
})
icon.addEventListener("click", function () {
    list.style.transform="translateX(-250px)"
    btn.style.transform="translateX(0px)"
})