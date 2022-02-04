"use stricit"

var num1 = document.querySelector("#num1")
var num2 = document.querySelector("#num2")
const answer = document.querySelector("#answer")
const addBtn = document.querySelector("#add-btn")
const substractBtn = document.querySelector("#substract-btn")
const mutlipleBtn = document.querySelector("#mutliple-btn")
const divideBtn = document.querySelector("#divide-btn")

addBtn.addEventListener("click", function() {
    const result = parseInt(num1.value) + parseInt(num2.value)
    answer.textContent = "Answer: " + result
})

substractBtn.addEventListener("click", function() {
    const result = num1.value - num2.value
    answer.textContent = "Answer: " + result
})

mutlipleBtn.addEventListener("click", function() {
    const result = num1.value * num2.value
    answer.textContent = "Answer: " + result
})

divideBtn.addEventListener("click", function() {
    const result = num1.value / num2.value
    answer.textContent = "Answer: " + result
})