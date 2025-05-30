const checkbox  = document.getElementById("chkbx")
const myRadio = document.getElementById("myRadio")
const myRadio2 = document.getElementById("myRadio2")
const para1 = document.getElementById("para1")
const para2 = document.getElementById("para2")
const mySubmit = document.getElementById("mySubmit")


mySubmit.onclick = function(){
 
    if(checkbox.checked){
        para1.textContent = `you are checked`
        if (myRadio.checked) {
            para2.textContent = `you selected card1`
        }
        else if(myRadio2.checked){

             para2.textContent = `you selected card2`


        }
        else {

           window.alert("you havent selected any card")

        }

    }
    else{
        para1.textContent = `you are not checked`
    }

}