// AT
let valueAB = document.getElementById('numberAB')
let valueAL = document.getElementById('numberAL')
let resultAT = document.getElementById('resultAT')

// AB
let resultAB = document.getElementById('resultAB')
let calcL = document.getElementById('calcL')

// AL
let numberN = document.getElementById('numberN')
let numberL = document.getElementById('numberL')
let numberH = document.getElementById('numberH')
let resultAL = document.getElementById('resultAL')

// V
let numAB = document.getElementById("numAB")
let numH = document.getElementById("numH")
let resultV = document.getElementById("resultV");

// Code
function calcAreaTotal() {
  let numberAB = Number(valueAB.value)
  let numberAL = Number(valueAL.value)
  let calc = 2 * numberAB + numberAL
  resultAT.innerHTML = `A Area Total é: ${calc}`
  valueAB.value = ''
  valueAL.value = ''
}
function calcAreaBase() {
  let ar = []
  let option = document.getElementsByTagName('option')
  for (let i of option) {
    ar.push(i.selected)
  }
  if (ar[0] == true) {
    calcAreaBaseTE(calcL)
  } else if (ar[1] == true) {
    calcAreaBaseQ(calcL)
  } else if (ar[2] == true) {
    calcAreaBaseHR(calcL)
  }
  calcL.value = ''
  function calcAreaBaseTE(arg) {
    let number = Number(arg.value)
    let resultalgo = Number(Math.sqrt(3))
    resultAB.innerHTML = (number * number * resultalgo) / 4
  }
  function calcAreaBaseQ(arg) {
    let number = Number(arg.value)
    resultAB.innerHTML = number * number
  }
  function calcAreaBaseHR(arg) {
    let number = Number(arg.value)
    let resultalgo = Number(Math.sqrt(3))
    resultAB.innerHTML = (3 * number * number * resultalgo) / 2
  }
}
function calcAreaLateral() {
  resultAL.innerHTML = numberN.value * numberL.value * numberH.value
  numberH.value = ''
  numberN.value = ''
  numberL.value = ''
}
function calcVolume() {
  resultV.innerHTML = numAB.value * numH.value
  numAB.value = ''
  numH.value = ''
}