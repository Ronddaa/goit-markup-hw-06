document.getElementById("is-open").addEventListener("click",function () {
    document.getElementById("modal-is-open").classList.add("is-open")
})

document.getElementById("close-modal-window").addEventListener("click",function () {
    document.getElementById("modal-is-open").classList.remove("is-open")
})