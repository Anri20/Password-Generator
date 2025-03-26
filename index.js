const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
    "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
    "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_",
    "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">",
    ".", "?", "/"];

const main = document.querySelector("main")

const toggle = document.getElementById("toggleSwitch")

const btnGenerate = document.getElementById("generate-password")

const pass1 = document.getElementById("pass1")
const pass2 = document.getElementById("pass2")

toggle.addEventListener("change", (e) => {
    const root = document.documentElement

    if (e.target.checked) {
        // Dark Mode
        console.log("checked")
        root.style.setProperty("--bg-color", "#1F2937")
        root.style.setProperty("--h1-color", "white")
        root.style.setProperty("--p-color", "#D5D4D8")

    } else {
        // Light Mode
        console.log("unchecked")
        root.style.setProperty("--bg-color", "#ECFDF5")
        root.style.setProperty("--h1-color", "black")
        root.style.setProperty("--p-color", "#6B7280")

    }
})

btnGenerate.addEventListener("click", () => {
    let passwordArray = []
    
    while (passwordArray.length < 2) {
        let password = ""
        for (let i = 0; i < 15; i++) {
            const random = Math.floor(Math.random() * characters.length)
            password += characters[random]
        }
        passwordArray.push(password)
    }

    pass1.textContent = passwordArray[0]
    pass2.textContent = passwordArray[1]
})
