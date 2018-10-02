import { printToDom, bookDiscount} from "../helpers/util.js";
import { getBook } from "./store.js";

let cartString = "";

const createCartCard = () => {
    const book = getBook(); 
  for (let i = 0; i < book.length; i++) {
      if (book[i].discount === true) {
    const newPrice =  bookDiscount(book[i].price);
    cartString += `    <div class="col-sm-3">
    <div class="card" id="cart-card" style="width: 13rem;">
        <h5 id="cart-header">Cart</h5>
        <img class="card-img-top" src="${book[i].image}" alt="${
      book[i].imageAlt
    }">
        <div class="card-body">
            <h5 class="card-title" id="cart-title">${book[i].title}</h5>
            <h6 class="card-price" id="cart-total">Total: $${newPrice}</h6>
            <button type="button" id="discount-button" class="discount-btn btn-danger">Apply Discount</button>
        </div>
    </div>
    </div>`;
  }
  printToDom(cartString, "cartCard");
};
}

// const discountButtonEvent = () => {
//     const book =getBook();
//     let cards = document.getElementByiD("cart-card");
//     for (let i = 0; i < cards.length; i++) {
//       let card = cards[i];
//       card.addEventListener("click", () => {
//           if (${book[i].discount} === true) {
//         bookDiscount();
//       });
//     }
//     }
//   };

export { createCartCard };
