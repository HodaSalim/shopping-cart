const incrementBtn = document.querySelector(".increment");
const decrementBtn = document.querySelector(".decrement");
let quantity = document.querySelector(".quantity");
let subTotal = document.querySelector(".subtotal-amount");
const shipping = document.querySelector(".shipping-amount").innerText;
const total = document.querySelector(".total-amount");

let itemValue = 200;

console.log(incrementBtn, decrementBtn, quantity, subTotal, shipping, total);

function increment() {
  if (Number(quantity.innerText) <= 0) {
    alert("Can't buy less than one");
    quantity.innerText = 0;
  }
  quantity.innerText = Number(quantity.innerText) + 1;
  subTotal.innerText = `$ ${itemValue * Number(quantity.innerText)}`;
  console.log("clicked plus");
  total.innerText = `$ ${
    Number(shipping.slice(1)) + Number(subTotal.innerText.slice(1))
  }`;
}

function decrement() {
  if (Number(quantity.innerText) <= 0) {
    alert("Can't buy less than one");
    quantity.innerText = 0;
  }
  quantity.innerText = Number(quantity.innerText) - 1;
  subTotal.innerText = `$ ${itemValue * Number(quantity.innerText)}`;
  console.log("clicked minus");
  total.innerText = `$ ${
    Number(shipping.slice(1)) + Number(subTotal.innerText.slice(1))
  }`;
}

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
