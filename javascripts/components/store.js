import { printToDom } from "../helpers/util.js";
import { createCartCard } from "./cart.js";

let newString = "";

const book = [
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/51f8R-RYkKL.jpg",
    imageAlt: "Go the F*ck To Sleep Cover",
    title: "Go The F*ck To Sleep",
    description:
      "A laugh-out-loud, adults-only bedtime story for parents familiar with the age-old struggle of putting their kids to bed.",
    price: "$12.00"
  }
];

const createBookCard = () => {
  for (let i = 0; i < book.length; i++) {
    newString += `<div class="row">
    <div class="col-sm-3 offset-md-2">
    <div class="card" id="store-card" style="width: 15rem;">
        <img class="card-img-top" src="${book[i].image}" alt="${
      book[i].imageAlt
    }">
        <div class="card-body">
            <h5 class="card-title">${book[i].title}</h5>
            <p class="card-text">${book[i].description}</p>
            <h6 class="card-price float-left">${book[i].price}</h6>
            <button id="cart-button${[
              i
            ]}" type="button" class="btn btn-primary float-right">Add To Cart</button>
        </div>
    </div>`;
  }
  printToDom(newString, "bookCard");
};

const addToCartButtonEvent = () => {
  let cards = document.getElementsByClassName("card");
  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    card.addEventListener("click", () => {
      createCartCard();
    });
  }
};

export { createBookCard, addToCartButtonEvent, book };
