import { createBookCard, addToCartButtonEvent } from "./components/store.js";

const initializeApp = () => {
  createBookCard();
  addToCartButtonEvent();
};

initializeApp();
