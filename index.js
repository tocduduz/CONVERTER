let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let kiloEl = document.getElementById("kilo-el")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloT0Pound = 2.204

convertBtn.addEventListener("click", function(){
let baseValue = inputEl.value

lengthEl.textContent = `${baseValue} meter = ${(baseValue *meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meter`
})


convertBtn.addEventListener("click", function(){
    let baseValue = inputEl.value

    volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallon | ${baseValue} gallon = ${(baseValue / literToGallon).toFixed(3)} liters`
})
convertBtn.addEventListener("click", function(){
    let baseValue = inputEl.value

    kiloEl.textContent = `${baseValue} kilos = ${(baseValue * kiloT0Pound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue / kiloT0Pound).toFixed(3)} kilos`
})



