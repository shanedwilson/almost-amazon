import { printToDom, bookDiscount} from "../helpers/util.js";

let cartString = "";
let counter = "0"

const createCartCard = (selectedTitle, selectedPrice) => {
    cartString += `<div id="${counter}"class="cart-item">`;
    cartString += `<h5>${selectedTitle}</h5>`;
    cartString += `<p id="price${counter}">${selectedPrice}</p>`;
    cartString += ` <button type="button" id="discount-button${counter}" class="discount-btn btn-danger">Apply Discount</button>`
    cartString += `</div>`;
    printToDom(cartString, "cartCard")
    counter ++;
};

const discountClick = () => {
    let buttons = document.getElementsByClassName("discount-btn")
    for (let i = 0; i < buttons.length; i++) {
      let button = buttons[i];
      button.addEventListener("click", (e) => {
        const cardId = e.currentTarget.closest('.cart-item').id;
        let priceId = document.getElementById("price" + cardId);
        let selectedPrice = priceId.innerHTML;
        selectedPrice = bookDiscount(selectedPrice);
                console.log(selectedPrice);
        priceId.innerHTML = `$${selectedPrice}`;
          });
        }
      };



export { createCartCard, discountClick };
