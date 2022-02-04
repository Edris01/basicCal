"use stricit"

let num1 = 2
let num2 = 6
let numberOne = document.getElementById("num1").textContent = num1
let numberTwo = document.getElementById("num2").textContent = num2
let answer = document.getElementById("answer")

function add() {
    let result = num1 + num2
    answer.textContent = "Answer: " + result
}

function substract() {
    let result = num1 - num2
    answer.textContent = "Answer: " + result
}

function times() {
    let result = num1 * num2
    answer.textContent = "Answer: " + result
}

function divide() {
    let result = num1 / num2
    answer.textContent = "Answer: " + result
}