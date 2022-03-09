import gsap from "gsap";

const pageEnter = (container) => {
  gsap.from(container, {
    opacity: 0,
    duration: 1,
  });
};

export default pageEnter;
