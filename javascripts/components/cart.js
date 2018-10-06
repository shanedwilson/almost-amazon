import { bookDiscount, addToDom } from "../helpers/util.js";
import { getBook } from "./store.js";

let counter = "0";

const createCartCard = (selectedTitle, selectedPrice) => {
  let cartString = "";
  cartString += `<div class="card text-center m-2">`;
  cartString += `<div id="${counter}"class="cart-item">`;
  cartString += `<h5 class="text-center" id="title${counter}">${selectedTitle}</h5>`;
  cartString += `<p class="text-center" id="price${counter}">${selectedPrice}</p>`;
  cartString += ` <button type="button" id="button${counter}" class="text-center discount-btn btn-danger">Apply Discount</button>`;
  cartString += `</div>`;
  cartString += `</div>`;
  addToDom(cartString, "cartCard");
  counter++;
};

const discountClick = () => {
  let buttons = document.getElementsByClassName("discount-btn");
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener("click", e => {
      const cardId = e.currentTarget.closest(".cart-item").id;
      let priceId = document.getElementById("price" + cardId);
      let titleId = document.getElementById("title" + cardId);
      let buttonId = document.getElementById("button" + cardId);

      let selectedPrice = priceId.innerHTML;
      let selectedTitle = titleId.innerHTML;
      selectedPrice = bookDiscount(selectedPrice);
      priceId.innerHTML = `$${selectedPrice}`;
      buttonId.innerHTML = "Discount Applied";
      button.disabled = true
      let cartBooks = getBook();
      cartBooks.forEach(cartBook => {
        if (selectedTitle === cartBook.title) {
          cartBook.discountAvailable = false;
        }
      })
    })
  }
};

export { createCartCard, discountClick };
