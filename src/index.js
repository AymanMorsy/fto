import "./style.scss";
import barba from "@barba/core";
import gsap from "gsap";
import { pageEnter, pageLeave, animateHero } from "./animations";

let isActive = false;
function animateLogo(s = 0) {
  const tl = gsap.timeline({
    delay: s,
    paused: true,
    onComplete: () => {
      isActive = false;
    },
    onStart: () => {
      isActive = true;
    },
  });
  tl.from("header .f", { x: -100, duration: 0.5 })
    .from("header .t", { x: -100, duration: 0.5, ease: "back.out(1.7)" })
    .from("header .o .out", { r: 0, duration: 0.5, ease: "expo.out" })
    .from("header .o .in", { r: 0, duration: 0.5, ease: "expo.out" }, "-=0.2")
    .from("header .leave", { rotation: 27, y: -100, duration: 0.5 }, "-=0.5");
  return tl;
}

const ImGlo = "I'm global";
barba.init({
  debug: true,
  views: [
    {
      namespace: "home",
      beforeEnter() {
        animateHero();
      },

      afterEnter(data) {
        if (!isActive) {
          animateLogo(1).play();
        }
        data.next.container
          .querySelector("header .logo")
          .addEventListener("mouseenter", () => {
            if (!isActive) {
              animateLogo().play();
            }
          });
      },
    },
    {
      namespace: "about",

      beforeEnter(data) {
        console.log("ImGlo:view ", ImGlo);
        if (!isActive) {
          animateLogo(1).play();
        }
        data.next.container
          .querySelector("header .logo")
          .addEventListener("mouseenter", () => {
            if (!isActive) {
              animateLogo().play();
            }
          });
      },
    },
    {
      namespace: "products",

      afterEnter(data) {
        data.next.container
          .querySelector("header .logo")
          .addEventListener("mouseenter", () => {
            animateLogo().play(0);
          });
      },
    },
  ],
  transitions: [
    {
      once: ({ next }) => {
        animateLogo(0.5).play();
        return gsap.from(next.container, {
          opacity: 0,
          duration: 2,
        });
      },
      leave: ({ current }) => {
        // using arrow fn and returning  meaning its async meaning that enter event wait untile it finshed
        return pageLeave();
      },
      enter({ next }) {
        pageEnter();
      },
    },
  ],
});

barba.hooks.beforeEnter(() => {
  // animate logo //
  // animateLogo(5).play();
  console.log("ImGlo: ", ImGlo);
});
