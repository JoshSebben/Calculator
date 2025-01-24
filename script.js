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


function multiply(num1, num2){ //Chooser == 1
    return num1 * num2
}

function divide(num1, num2){ //Chooser == 2
    return num1 / num2
}

function add(num1, num2){ //Chooser == 3
    return num1 + num2 
}

function subtract(num1, num2){ //Chooser == 4
    return num1 - num2
}

function operate(){
    //Calculating answer and storing it into the dataStore

    if (chooser == 1){
        let product = multiply(dataStore[0], dataStore[1])
        dataStore.pop()
        dataStore.pop()
        dataStore.push(product)
    }
    if (chooser == 2){
        let quotient = divide(dataStore[0], dataStore[1])
        dataStore.pop()
        dataStore.pop()
        dataStore.push(quotient)
    }
    if (chooser == 3){
        let sum = add(dataStore[0], dataStore[1])
        dataStore.pop()
        dataStore.pop()
        dataStore.push(sum)
    }
    if (chooser == 4){
        let difference = subtract(dataStore[0], dataStore[1])
        dataStore.pop()
        dataStore.pop()
        dataStore.push(difference)
    }

    //Replacing the text

    clearText()

    const userInput = document.querySelector("#userRow")
    const newDiv = document.createElement("div")        
    
    const idNumber = Math.floor(Math.random() * (999999 - 1 + 1)) + 1;
    let textForm = idNumber.toString()

    newDiv.setAttribute("id", textForm)
    userInput.appendChild(newDiv)

    elem = document.getElementById(textForm);
    elem.innerHTML = dataStore[0]; 


}
