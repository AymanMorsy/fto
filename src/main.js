import { isUserLoggedIn } from "./pages/firebase";
import "./style.scss";

const account = document.querySelector("header .account")
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

account.addEventListener("click",()=>{
  isUserLoggedIn((user )=> {
    if(user){
        window.location = "index.html"
      }else{
        window.location = "signin.html"
    }
  })
})