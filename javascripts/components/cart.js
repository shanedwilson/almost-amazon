import { printToDom } from "../helpers/util.js";
import { getBook } from "./store.js";

let cartString = "";

const createCartCard = () => {
    const book = getBook(); 
  for (let i = 0; i < book.length; i++) {
    cartString += `    <div class="col-sm-3">
    <div class="card" id="cart-card" style="width: 13rem;">
        <h5 id="cart-header">Cart</h5>
        <img class="card-img-top" src="${book[i].image}" alt="${
      book[i].imageAlt
    }">
        <div class="card-body">
            <h5 class="card-title" id="cart-title">${book[i].title}</h5>
            <h6 class="card-price" id="cart-total">Total: ${book[i].price}</h6>
        </div>
    </div>
    </div>`;
  }
  printToDom(cartString, "cartCard");
};

export { createCartCard };
