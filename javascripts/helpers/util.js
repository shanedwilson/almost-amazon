const printToDom = (stringToPrint, divId) => {
  let selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = stringToPrint;
};

const bookDiscount = (bookPrice) => {
  let newPrice = (parseFloat(bookPrice) - (parseFloat(bookPrice) * .12)).toFixed(2);
  return newPrice;
};

export { printToDom, bookDiscount};
