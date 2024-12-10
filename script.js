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