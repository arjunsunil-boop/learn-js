const temp = document.getElementById("temp")
const cTof = document.getElementById("cTof")
const fToc = document.getElementById("fToc")
const Convert = document.getElementById("Convert")
const result = document.getElementById("result")

function convert() {


    let tmp = temp.value

    if (cTof.checked) {
        let cTemp = (tmp * (9 / 5)) + 32
        cTemp = cTemp.toFixed(2)
        result.textContent = `${cTemp} F`
    } else if (fToc.checked) {
        let cTemp = (tmp - 32) * (5 / 9)
        cTemp = cTemp.toFixed(2)
        result.textContent = `${cTemp} C`
    }
    else {
        result.textContent = `Select A Unit First`

    }

}

