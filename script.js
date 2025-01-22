let chooser = 0
let dataStore = []

function clearText(){
    const userInput = document.querySelector("#userRow")
    
    while (userInput.firstChild) {
        userInput.removeChild(userInput.lastChild);
      }
}

function changeText(text){
    if (chooser == 0){
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
    else if (chooser != 0){
        clearText()
        chooser = 0

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
      
}


function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}

function add(num1, num2){
    return num1 + num2 
}

function subtract(num1, num2){
    return num1 - num2
}

function operate(){

}
