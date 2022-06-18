
import "./style.scss";

// nav.mobile //
const navMenu = document.querySelector("nav.mobile");
const navMenuButton = document.querySelector(".nav-menu-button");

navMenuButton.addEventListener("click", () => {
  navMenu.classList.toggle("isOpen");
});

/*****************Firebase*******************/
const firebaseConfig = {
  apiKey: "AIzaSyCaDwXUAMcg8Yqm2s5FxoIYrjHInu8Dt-o",
  authDomain: "hellorganics.firebaseapp.com",
  projectId: "hellorganics",
  storageBucket: "hellorganics.appspot.com",
  messagingSenderId: "686729744109",
  appId: "1:686729744109:web:4c43731e87202647ec46e4"
};
import { initializeApp } from "firebase/app";
import { getFirestore,collection,getDocs, doc, setDoc, addDoc ,where ,query,orderBy} from "firebase/firestore";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,sendEmailVerification,} from "firebase/auth";
const App = initializeApp(firebaseConfig);
const Firstore = getFirestore(App)
const Auth = getAuth(App)

const loginEmailPass = async()=>{

}
// signInWithEmailAndPassword(Auth,"ayman@yahoo.com","123456789").then(userCridential =>{
//   console.log('userCridential: ', userCridential.user);
// })

// signInWithEmailAndPassword(Auth,"t1@yahoo.com","123456789").then(userCridential =>{
//   console.log('t1@yahoo.com: ', userCridential.user.uid);
// })

// signInWithEmailAndPassword(Auth,"admin@h.com","123456789").then(userCridential =>{
//   console.log('userCridential: ', userCridential.user);
// })


// createUserWithEmailAndPassword(Auth,"t1@yahoo.com","123456789") 
// signOut(Auth)



 






// setDoc(doc(Firstore,"customers/2022"),{name:"hassan mohamed"})
const orderCollections = collection(Firstore,"ot1")
async function addOrder(uid){
  const orderDoc =await addDoc(orderCollections,{
    userId:uid,
    order:{
      honey:"1jar"
    },
    deliveryOn:new Date(2018, 11, 24)
  })
}


async function get(user) {
  try {
    const ordersRef =collection(Firstore, 'ot1')
    // const q = query(ordersRef,where("userId","==",user.uid),where("deliveryOn","==",new Date(2018, 11, 26)))
    const q = query(ordersRef,where("deliveryOn","==",new Date(2018, 11, 24)))
    // const q = query(ordersRef,orderBy("deliveryOn"))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {  
      console.log(doc.data().deliveryOn.toDate()) 
    });
  } catch (e) {
    console.error('Error get documents: ', e);
  }
}


// async function get() {
//   try {
//     const querySnapshot = await getDocs(collection(Firstore, 'ot1'));

//     querySnapshot.forEach((doc) => {  
//       console.log('doc: ', doc.data());
      
     
//     });
//   } catch (e) {
//     console.error('Error get documents: ', e);
//   }
// }


// addOrder()

// onAuthStateChanged(Auth,(user )=> {
//   if(user){
//       console.log(`Wellcome 🍟 ${user.email}`);
//       document.querySelector(".registeration").style.display="none"
//     }else{
//       console.log("SignIn Please");
//       document.querySelector(".registeration").style.display="block"
//   }
// })

// signOut(Auth)

// const signInBtn = document.querySelector(".registeration .signIn")
// const signUpBtn = document.querySelector(".registeration .signup")
// signUpBtn.addEventListener("click",(e)=>{
//   e.preventDefault()
//   console.log(document.getElementById("email").value);
//   console.log(document.getElementById("pass").value);
//   createUserWithEmailAndPassword(
//     Auth,
//     document.getElementById("email").value,
//     document.getElementById("pass").value
//     ) 
// })
// signInBtn.addEventListener("click",(e)=>{
//   e.preventDefault()
//   console.log(document.getElementById("email").value);
//   console.log(document.getElementById("pass").value);
//   signInWithEmailAndPassword(
//     Auth,
//     document.getElementById("email").value,
//     document.getElementById("pass").value
//     ) 
// })
// /*****************Firebase*******************/


// start Cart //
const cart = document.querySelector(".cart .counter")
if( localStorage.cartNum){
  cart.innerText = localStorage.cartNum;
  const prod = JSON.parse(localStorage.products)
  console.log(prod);
}

// end Cart //