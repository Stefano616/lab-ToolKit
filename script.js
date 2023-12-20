let resultTxt = document.getElementById("result-text")
const conc1 = document.getElementById("conc1")
const conc2 = document.getElementById("conc2")
const vol1 = document.getElementById("vol1")
const vol2 = document.getElementById("vol2")
const btnCalculate = document.getElementById("btn-calculate")
const units = document.getElementsByTagName("select")

let result = 0

// ----- Calculate the concentration based on the formula and on the presented inputs
// consider the conversion in the formula
function concentration() {
    Number(conc1.value) === 0 ?
        result = Number(conc2.value) * units[2].value * Number(vol2.value) * units[3].value / Number(vol1.value) * units[1].value :
        Number(conc2.value) === 0 ?
            result = Number(conc1.value) * units[0].value * Number(vol1.value) * units[1].value / Number(vol2.value) * units[3].value :
            Number(vol1.value) === 0 ?
                result = Number(conc2.value) * units[2].value * Number(vol2.value) * units[3].value / Number(conc1.value) * units[0].value :
                Number(vol2.value) === 0 ?
                    result = Number(conc1.value) * units[0].value * Number(vol1.value) * units[1].value / Number(conc2.value) * units[2].value :
                    alert("Please, define 3 inputs for the formula");
    return result
}


// ----- Calculate the conversion based on the unit selected, based on conversion factors cf


btnCalculate.addEventListener('click', () => {
    concentration()
    resultTxt.innerText = `${result}`
    return result
})



resultTxt.innerText += ` ${result}` 