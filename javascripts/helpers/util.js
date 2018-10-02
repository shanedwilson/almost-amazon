const printToDom = (stringToPrint, divId) => {
  let selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = stringToPrint;
};

const bookDiscount = (selectedPrice) => {
   let priceString = selectedPrice.replace(/[$]/g,""); 
  let newPrice = (parseFloat(priceString) - (parseFloat(priceString) * .12)).toFixed(2);
  console.log(newPrice);
  return newPrice;
};

export { printToDom, bookDiscount, newPrice};
