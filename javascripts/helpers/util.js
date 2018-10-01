const printToDom = (stringToPrint, divId) => {
  let selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = stringToPrint;
};

export { printToDom };
