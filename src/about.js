import "./about.scss";
import gsap from "gsap";

export function aboutjs() {
  console.log("about page js");
  gsap.to("p", { x: 100, duration: 5 });
}
