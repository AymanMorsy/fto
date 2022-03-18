import gsap from "gsap";
export default function animateHero() {
  const tl = gsap.timeline({ repeat: -1 });
  const dynamicHero = ".good,.clean,.healty,.tasty";
  tl.fromTo(dynamicHero, { y: 50 }, { y: 0, duration: 1, delay: 0 });
  tl.to(dynamicHero, { y: -66, duration: 1, delay: 2 });
  tl.to(dynamicHero, { y: -132, duration: 1, delay: 2 });
  tl.to(dynamicHero, { y: -198, duration: 1, delay: 2 });
  tl.to(dynamicHero, { y: -264, duration: 1, delay: 2 });
}
