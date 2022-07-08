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
  const db = getFirestore(App)
  const Auth = getAuth(App)
  

const col = (collectionName) => collection(db,collectionName)
const isUserLoggedIn = (fn)=> onAuthStateChanged(Auth,fn)

const orderCollections = collection(db,"tempOrders")

async function addTempOrder(uid,porducts,cartNum,totalCost){
  const orderDoc = await setDoc(doc(db,"tempOrders",uid),{
    userId:uid,
    tempOrder:porducts,
    cartNum,
    totalCost,

  })
}
const emailPasswordSignIn = (email,password)=> signInWithEmailAndPassword(Auth,email,password)
const emailPasswordSignUp = (email,password)=> createUserWithEmailAndPassword(Auth,email,password)
const signOutUser = ()=>  signOut(Auth)

 
  
  // setDoc(doc(db,"customers/2022"),{name:"hassan mohamed"})

  
  
  async function get(user) {
    try {
      const ordersRef =collection(db, 'ot1')
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
  //     const querySnapshot = await getDocs(collection(db, 'ot1'));
  
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


  export{
    db,
    col,
    where,
    query,
    getDocs,
    isUserLoggedIn,
    addTempOrder,
    emailPasswordSignIn,
    signOutUser,
    emailPasswordSignUp,
  }