const printToDom = (stringToPrint, divId) => {
    let selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML = stringToPrint;    
}

export{printToDom};