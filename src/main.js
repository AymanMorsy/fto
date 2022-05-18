import "./style.scss";
// import barba from "@barba/core";
// import gsap from "gsap";
import { aboutjs } from "./about";

// import * as contentful from "contentful";

// var client = contentful.createClient({
//   space: "qsose1xd63wa",
//   accessToken: "SVgVyebXkcCkniau_rnQw1cGDD8ifmrV1CSqc6d53Wo",
// });

// client.getEntry("6SFTgFWchJNV8xNBvM9Q16").then(function (entry) {
//   // logs the entry metadata

//   console.log("entry.sys: ", entry.sys);

//   // logs the field with ID title

//   console.log("entry.fields.productName: ", entry.fields);
// });

// بيجيب كل الداتا اللى فى السبيس لكل الصفحات
// client.getEntries().then(function (entries) {
//   // log the title for all the entries that have it
//   entries.items.forEach(function (entry) {
//     console.log("entry.fields: ", entry.fields);
//     // if (entry.fields.productName) {
//     //   console.log(entry.fields.productName);
//     // }
//   });
// });

// client
//   .getEntries({
//     // باصينا اوبجكيت علشان يحدد الداتا لموديول معين
//     // content_type: "about",
//     content_type: "products",
//     // فلتر بنكتب اسم الحقل والقيمة ويعمل فلتر على اساسها ال اي دي بيكون موجود فى الموديول
//     // "fields.avilability": true,
//     //  استخدام اوبريتور لا يساوي لعكس نتائج السطر السابق
//     // "fields.avilability[ne]": true,
//   })
//   .then(function (entries) {
//     // log the title for all the entries that have it
//     entries.items.forEach(function (entry) {
//       console.log("entry.fields: ", entry.fields);
//       // if (entry.fields.productName) {
//       //   console.log(entry.fields.productName);
//       // }
//     });
//   });

/*****************GrapgQl*******************/
// https://www.youtube.com/watch?v=BkecWwcLYuk&ab_channel=Contentful
// https://codesandbox.io/s/6j2z03p76k?file=/src/index.js:101-407
// 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧

// const accessToken = "SVgVyebXkcCkniau_rnQw1cGDD8ifmrV1CSqc6d53Wo";
// const spaceId = "qsose1xd63wa";
// // https://graphql.contentful.com/content/v1/spaces/qsose1xd63wa/explore?access_token=SVgVyebXkcCkniau_rnQw1cGDD8ifmrV1CSqc6d53Wo

// const query = `
// {
//   productsCollection{
//     items {
//     productName
//       price
//       image{
//         url
//       }
//   }
//   }
// }
// `;
// fetch(
//   `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master`,
//   {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//       authorization: `Bearer ${accessToken}`,
//     },
//     body: JSON.stringify({
//       query,
//     }),
//   }
// )
//   .then((res) => res.json())
//   .then((response) => {
//     console.log("response: ", response.data.productsCollection.items);
//   })
//   .catch((error) => {
//     console.log("error: ", error);
//   });
/*****************GrapgQl*******************/

// barba.use(barbaPrefetch);

// let isActive = false;
// function animateLogo(s = 0) {
//   const tl = gsap.timeline({
//     delay: s,
//     paused: true,
//     onComplete: () => {
//       isActive = false;
//     },
//     onStart: () => {
//       isActive = true;
//     },
//   });
//   tl.from("header .f", { x: -100, duration: 0.5 })
//     .from("header .t", { x: -100, duration: 0.5, ease: "back.out(1.7)" })
//     .from("header .o .out", { r: 0, duration: 0.5, ease: "expo.out" })
//     .from("header .o .in", { r: 0, duration: 0.5, ease: "expo.out" }, "-=0.2")
//     .from("header .leave", { rotation: 27, y: -100, duration: 0.5 }, "-=0.5");
//   return tl;
// }

// barba.init({
//   // debug: true,
//   views: [
//     {
//       namespace: "home",
//       // play hero animation
//       beforeEnter() {
//         animateHero();
//       },

//       afterEnter(data) {
//         if (!isActive) {
//           // play logo animation after page loaded
//           animateLogo(1).play();
//         }
//         // play logo animation on hover event
//         data.next.container
//           .querySelector("header .logo")
//           .addEventListener("mouseenter", () => {
//             if (!isActive) {
//               animateLogo().play();
//             }
//           });
//       },
//     },
//     {
//       namespace: "about",

//       beforeEnter(data) {
//         let nextPageFragment = new DocumentFragment();
//         let html = document.createElement("html");
//         html.innerHTML = data.next.html;
//         nextPageFragment.appendChild(html);
//         // console.log("data: ", nextPageFragment);
//         // const frg = gsap.utils.selector(nextPageFragment);
//         // console.log(frg("html")[0]);
//         const cuurentPageLinks = gsap.utils.toArray("link").map((e) => e.href);
//         nextPageFragment.querySelectorAll("link").forEach((e) => {
//           if (cuurentPageLinks.includes(!e.href)) {
//             // document.head.appendChild(e);
//           }
//         });
//         if (!isActive) {
//           animateLogo(1).play();
//         }
//         data.next.container
//           .querySelector("header .logo")
//           .addEventListener("mouseenter", () => {
//             if (!isActive) {
//               animateLogo().play();
//             }
//           });
//       },
//     },
//     {
//       namespace: "products",

//       beforeEnter(data) {
//         if (!isActive) {
//           animateLogo(1).play();
//         }
//         data.next.container
//           .querySelector("header .logo")
//           .addEventListener("mouseenter", () => {
//             if (!isActive) {
//               animateLogo().play();
//             }
//           });
//       },
//     },
//   ],
//   transitions: [
//     {
//       once: ({ next }) => {
//         animateLogo(0.5).play();
//         return gsap.from(next.container, {
//           opacity: 0,
//           duration: 2,
//         });
//       },
//       leave: ({ current }) => {
//         // using arrow fn and returning  meaning its async meaning that enter event wait untile it finshed
//         return pageLeave();
//       },
//       enter({ next }) {
//         pageEnter();
//       },
//     },
//   ],
// });

// barba.hooks.beforeEnter(() => {
//   // animate logo //
//   // animateLogo(5).play();
//   console.log("ImGlo: ", ImGlo);
// });

// nav.mobile //
const navMenu = document.querySelector("nav.mobile");
const navMenuButton = document.querySelector(".nav-menu-button");

navMenuButton.addEventListener("click", () => {
  navMenu.classList.toggle("isOpen");
});
