// console.log(`hello`)
// console.log(`ilike pizza`)


// window.alert(`alert`)
//vasriables are numer string boolean


// let brand = "MyBrand"

// document.getElementById("h1tag").textContent= `your brand name is ${brand}`

// let name 
// function printUsername(){
//     name = document.getElementById("username").value 
//     if (Boolean(name)==false) {

//         window.alert("Cannot be empty")
        
//     }
//     else{
//         document.getElementById("yourName").textContent= `Your username is ${name}`
//     }
    
// }

// document.getElementById("submit").onclick = printUsername


let count = 0

const increase = document.getElementById("inc")
const decrease = document.getElementById("dec")

function increment(){
    count = count +1
   document.getElementById("counter").textContent=count
}

// function decrement(){
//     count = count - 1
//    document.getElementById("counter").textContent=count
// }

function reset(){
    count = 0
   document.getElementById("counter").textContent=count
}

increase.onclick = increment
decrease.onclick = function(){
    count--
    document.getElementById("counter").textContent = count
}
document.getElementById("reset").onclick = reset