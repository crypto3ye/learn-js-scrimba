let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0
let countSave = 0
let saveFlag = true

function increment() {
    count = count + 1
    countEl.innerText = count
    saveFlag = true
}

function save() {
    if (count > 0 && saveFlag == true) {
        countSave = countSave + "-" + count
        //saveEl.textContent = countSave //textContent return human readable content like spaces as well.
        saveEl.innerText = countSave
        saveFlag = false
        count = 0
        countEl.innerText = 0

    }
}

