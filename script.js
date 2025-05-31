const num = document.getElementById("num")

const para1 = document.getElementById("para1")

const submit = document.getElementById("submit")

const min = 1
const max =6

submit.onclick =  function(){
    n = Number(num.value)
    let random = Math.round(Math.random() *(max-min+1)) + min
    console.log(random)
    if (n===random) {
        para1.textContent = `You guessed it right`
    } else {
        para1.textContent = `Better luck next time`
    }
}