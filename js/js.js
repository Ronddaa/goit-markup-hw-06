document.getElementById("is-open").addEventListener("click",function () {
    document.getElementById("modal-is-open").classList.add("is-open")
})

document.getElementById("close-modal-window").addEventListener("click",function () {
    document.getElementById("modal-is-open").classList.remove("is-open")
})

document.getElementById("is-open-burger").addEventListener("click",function () {
    document.getElementById("is-open-burger-menu").classList.add("is-open")
})