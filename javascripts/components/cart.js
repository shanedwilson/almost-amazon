import { printToDom } from "../helpers/util.js";
import { book } from "./store.js";

let cartString = "";

const createCartCard = () => {
  for (let i = 0; i < book.length; i++) {
    cartString += `<div class="card" id="store-card" style="width: 18rem;">
        <img class="card-img-top" src="${book[i].image}" alt="${
      book[i].imageAlt
    }">
        <div class="card-body">
            <h5 class="card-title">${book[i].title}</h5>
            <p class="card-text">${book[i].description}</p>
            <h6 class="card-price">${book[i].price}</h6>
        </div>
    </div>`;
  }
  printToDom(cartString, "cartCard");
};

export { createCartCard };
