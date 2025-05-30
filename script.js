//use Math module to use various math functions 

const min = 0
const max = 100

const randombtn = document.getElementById("reset")

const randomId = document.getElementById("random")

randombtn.onclick = function(){
    let randomNum = Math.round(Math.random() * (max - min)) +min
    randomId.textContent = randomNum
}