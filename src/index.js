import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

var swiper = new Swiper(".mySwiper", {

    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
    },
  });
  
  const plyVidBtns = document.querySelectorAll(".video-play-button")
  
  const vidOverlay = document.getElementById("video-overlay")
  
  
  
  plyVidBtns.forEach(btn =>{
    btn.addEventListener("click",(e)=>{
      e.preventDefault()
      // btn.dataset.id
  
      vidOverlay.classList.add("open");
      let customIframe = document.createElement("iframe")
      customIframe.width= '100%';
      customIframe.height= '80%';
      customIframe.src= `https://www.youtube.com/embed/${btn.dataset.id}?autoplay=1&showinfo=0&controls=0`;
      customIframe.allow='autoplay'
      customIframe.setAttribute('frameborder','0');
      vidOverlay.appendChild(customIframe)
    })
  })
  
  
  const closeBtn = document.querySelector(".video-overlay-close")
  closeBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    document.querySelector("iframe").remove()
    vidOverlay.classList.remove("open")
  })