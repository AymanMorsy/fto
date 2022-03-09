import "./style.scss";
import barba from "@barba/core";
import gsap from "gsap";
import { pageEnter, pageLeave } from "./animations";

barba.init({
  transitions: [
    {
      once: ({ next }) => {
        console.log("done");
        return gsap.from(next.container, {
          opacity: 0,
          duration: 2,
        });
      },
      leave: ({ current }) => pageLeave(current.container),
      enter({ next }) {
        pageEnter(next.container);
      },
    },
  ],
});

// animate logo //
const logo = gsap.timeline({ delay: 1 });
logo
  .from(".f", { x: -100, duration: 1 })
  .from(".t", { x: -100, duration: 1, ease: "back.out(1.7)" })
  .from(".o .out", { r: 0, duration: 1, ease: "expo.out" })
  .from(".o .in", { r: 0, duration: 0.7, ease: "expo.out" }, "-=0.2")
  .from(".leave", { rotation: 27, y: -100, duration: 1 }, "-=0.5");
