import gsap from "gsap";

const pageEnter = () => {
  const tl = gsap.timeline();
  tl.fromTo(".transition", { x: 0 }, { x: "-100%", duration: 1.2, delay: 0.3 });
};

export default pageEnter;
