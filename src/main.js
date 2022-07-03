
import "./style.scss";

// nav.mobile //
const navMenu = document.querySelector("nav.mobile");
const navMenuButton = document.querySelector(".nav-menu-button");

navMenuButton.addEventListener("click", () => {
  navMenu.classList.toggle("isOpen");
});




// start Cart //
const cart = document.querySelector(".cart .counter")
if( localStorage.cartNum){
  cart.innerText = localStorage.cartNum;
  const prod = JSON.parse(localStorage.products)
  // console.log(prod);
}

// end Cart //