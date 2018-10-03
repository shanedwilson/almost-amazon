import { printToDom } from "../helpers/util.js";
import { createCartCard, discountClick } from "./cart.js";

let newString = "";

const books = [
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/51f8R-RYkKL.jpg",
    imageAlt: "Go the F*ck To Sleep Cover",
    title: "Go The F*ck To Sleep",
    description:
      "A laugh-out-loud, adults-only bedtime story for parents familiar with the age-old struggle of putting their kids to bed.",
    price: "12.00",
    discountAvailable: true
  },

{
    image: "https://images-na.ssl-images-amazon.com/images/I/619JrJuUQqL.jpg",
    imageAlt: "You Have To F*cking Eat",
    title: "You Have To F*cking Eat",
    description:
      "A laugh-out-loud, adults-only bedtime story for parents familiar with the age-old struggle of putting their kids to bed.",
    price: "11.00",
    discountAvailable: true
}  

];

const getBook = () => {
    return books;
}

const createBookCard = () => {
  for (let i = 0; i < books.length; i++) {
    newString += `
    <div class="col-sm-3">
    <div class="card" id="${i}">
        <img class="card-img-top" src="${books[i].image}" alt="${
      books[i].imageAlt
    }">
        <div class="card-body">
            <h5 class="card-title" id="title${i}">${books[i].title}</h5>
            <p class="card-text">${books[i].description}</p>
            <h6 class="card-price float-left" id="book-price${i}">$${books[i].price}</h6>
            <button id="cart-button${[
              i
            ]}" type="button" class="btn btn-primary float-right">Add To Cart</button>
        </div>
    </div>
    </div>`;
  }
  printToDom(newString, "bookCard");
};



const addToCartButtonEvent = () => {
  let buttons = document.getElementsByClassName("btn");
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener("click", (e) => {
        let bookId = e.currentTarget.closest('.card').id;;
        console.log(bookId);
        let titleId = document.getElementById('title' + bookId);
        let priceId = document.getElementById('book-price' + bookId );
        let selectedTitle = titleId.innerHTML;
        let selectedPrice = priceId.innerHTML;
      createCartCard(selectedTitle, selectedPrice);
      matchedBook(selectedTitle);
    });
  }
};

const matchedBook = (selectedTitle) => {
    for (let i = 0; i < books.length; i ++) {
        if (books[i].title === selectedTitle) {
            let selectedBook = books[i];
            discountClick(selectedBook);
        } 
}
}

export { createBookCard, addToCartButtonEvent, getBook};