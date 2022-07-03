import "./signin.scss";
import {col,where ,query,getDocs,addTempOrder, emailPasswordSignIn, emailPasswordSignUp} from "../firebase"

const navToSignUp = document.querySelector(".signin .doyou span")
const navToSignIn = document.querySelector(".signup .doyou span")

const signUpForm = document.querySelector(".signup")
const signInForm = document.querySelector(".signin")

const signInEmailInput = document.querySelector(".signin input[type=email]")
const signInPassInput = document.querySelector(".signin input[type=password]")
const signInErrorMsg = document.querySelector(".signin .error-msg p")
const signInSubmit = document.querySelector(".signin .submit")

const signUpEmailInput = document.querySelector(".signup input[type=email]")
const signUpPassInput = document.querySelector(".signup input[type=password]")
const signUpErrorMsg = document.querySelector(".signup .error-msg p")
const signUpSubmit = document.querySelector(".signup .submit")



// switch between signIn and signUp animation //
navToSignUp.addEventListener("click",(e)=>{
    e.preventDefault()
    signUpForm.classList.add("show")
    signInForm.classList.add("push")
})
navToSignIn.addEventListener("click",(e)=>{
    e.preventDefault()
    signUpForm.classList.remove("show")
    signInForm.classList.remove("push")
})


// Sign In and Send The Cart data to the server ///
signInSubmit.addEventListener("click",()=>{
  emailPasswordSignIn(signInEmailInput.value,signInPassInput.value).then(userCridential =>{
    console.log('userCridential: ', userCridential.user);
    return  userCridential.user
  }).then((user)=>{
    console.log('user:🍇🌴 ', user);
    if( localStorage.cartNum){
        const {products,cartNum,totalCost} = localStorage
        const prod = JSON.parse(products)
        const num = JSON.parse(cartNum)
        const cost = JSON.parse(totalCost)
        addTempOrder(user.uid,prod,num,cost)
      }
      window.location = "products.html"

  }).catch(e =>{
    switch (e.code){
      case 'auth/user-not-found':
        signInErrorMsg.innerText = "user not found"

    }
  })
})

// Sign Up //
signUpSubmit.addEventListener("click",()=>{
  console.log('signUpSubmited');
  emailPasswordSignUp(signUpEmailInput.value,signUpPassInput.value).then(userCridential =>{
    console.log('userCridential: ', userCridential.user);
    return  userCridential.user
  }).then((user)=>{
    console.log('user:🍇🌴 ', user);
    if( localStorage.cartNum){
        const {products,cartNum,totalCost} = localStorage
        const prod = JSON.parse(products)
        const num = JSON.parse(cartNum)
        const cost = JSON.parse(totalCost)
        addTempOrder(user.uid,prod,num,cost)
      }
  }).catch(e =>{
    switch (e.code){
      case 'auth/email-already-in-use':
        signUpErrorMsg.innerText = "email already in use"

    }
  })
})




async function get(user) {
  try {
    const colRefOfOrders =col('orders')
    // const q = query(colRefOfOrders,where("userId","==",user.uid),where("deliveryOn","==",new Date(2018, 11, 26)))
    const q = query(colRefOfOrders)

    console.log('q.type: ', q.type);
    // const q = query(colRefOfOrders,orderBy("deliveryOn"))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {  
      // console.log(doc.data().deliveryOn.toDate()) 
      console.log(doc.data()) 
    });
  } catch (e) {
    console.error('Error get documents: ', e);
  }
}
// get()