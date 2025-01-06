function changeText(text){
    const userInput = document.querySelector("#userRow")
    const newDiv = document.createElement("div")

    //This is to fix the "divs with same ID" problem; 
    const idNumber = Math.floor(Math.random() * (999999 - 1 + 1)) + 1;
    let textForm = idNumber.toString()

    newDiv.setAttribute("id", textForm)
    userInput.appendChild(newDiv)

    elem = document.getElementById(textForm);
    elem.innerHTML = text;   
}

function clearText(){
    const userInput = document.querySelector("#userRow")
    
    while (userInput.firstChild) {
        userInput.removeChild(userInput.lastChild);
      }
}
// -- (For equations that deals with 2 numbers)
function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}

function add(num1, num2){
    return num1 + num2 //add later to accept strings
}

function subtract(num1, num2){
    return num1 - num2
}
// -- |

// -- (Dealing with equations with more than 2 numbers)
function sum(array){
    return array.reduce((total, current) => total + current, 0)
}

function difference(array){
    return array.reduce((total, current) => total - current)
}

function product(array){
    return array.reduce((product, current) => product * current)
}

function quotient(array){
    return array.reduce((quotient, current) => quotient / current)
}
// -- |