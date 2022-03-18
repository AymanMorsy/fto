import gsap from "gsap";
// leave transtion working as reseter for the enter transtion
const pageLeave = () => {
  const tl = gsap.timeline();
  tl.fromTo(".transition", { x: "100%" }, { x: 0, duration: 1 });
  // return tl is required for barabjs
  return tl;
};

export default pageLeave;
