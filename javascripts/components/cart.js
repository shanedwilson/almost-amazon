import { printToDom, bookDiscount, newPrice} from "../helpers/util.js";
// import { selectedBook } from "./store.js";

let cartString = "";
let counter = "0"
// let discountPrice = newPrice;

const createCartCard = (selectedTitle, selectedPrice) => {
    cartString += `<div id="${counter}"class="cart-item">`;
    cartString += `<h5>${selectedTitle}</h5>`;
    cartString += `<p id="price${counter}">${selectedPrice}</p>`;
    cartString += ` <button type="button" id="discount-button${counter}" class="discount-btn btn-danger">Apply Discount</button>`
    cartString += `</div>`;
    printToDom(cartString, "cartCard")
    counter ++;
    // bookDiscount(selectedPrice)
    // console.log(newPrice)
};

const discountClick = (newPrices) => {
    let buttons = document.getElementsByClassName("discount-btn")
    for (let i = 0; i < buttons.length; i++) {
      let button = buttons[i];
      button.addEventListener("click", (e) => {
        const cardId = e.currentTarget.closest('.cart-item').id;
        let priceId = document.getElementById("price" + cardId);
        let selectedPrice = priceId.innerHTML;
        bookDiscount(selectedPrice);
                console.log(newPrice);
        // let discount = bookDiscount(priceId.innerHTML);
        // console.log(discount);
        // console.log(discountPrice);
        // priceId.innerHTML = `$${discountPrice}`;

          });
        }
      };
    // }


export { createCartCard, discountClick };
