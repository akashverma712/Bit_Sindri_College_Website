var premier = new Typed(".premier",{
    strings: ["BIRSA INSTITUTE OF TECHNOLOGY","THE PREMIER ENGINEERING COLLEGE OF JHARKHAND","WHERE VISION MEETS REALITY"],
    typeSpeed : 50,
    backSpeed : 50,
    loop : true
}) 
var initialPath = "M 10 40 Q 750 40 1500 40"
var finalPath = "M 10 40 Q 750 40 1500 40"
var string = document.querySelector("#string")
string.addEventListener("mouseenter",function(e){
           path = `M 10 40 Q ${e.x} ${e.y} 1500 40`

           gsap.to("svg path",{
            attr: { d: path },
            duration: 0.2,
            ease:"power3.out"
           })
})
string.addEventListener("mouseleave",function(){
           gsap.to("svg path",{
            attr: { d: finalPath},
            duration: 1.5,
            ease:"elastic.out(1,0.2)"
           })
})


gsap.from("heading span",{
    y:50,
    duration:0.8,
    delay: 0.5,
    opacity: 0,
    stagger: -0.15,
     
})
gsap.from(".heading h1",{
  y:-100,
  duration:2,
  delay: 2.5,
  opacity: 0,
  
   
})
gsap.from(".motto h2",{
  y:-50,
  duration:2,
  delay: 2.5,
  opacity: 0,
  
   
})
var play2 = document.querySelector(".intro")
var play1 = document.querySelector(".background-clip")
var play = document.querySelector(".heading h1")
play.addEventListener('mouseenter',function(){
    play1.play()
    gsap.to(".intro",{
     opacity:0.9,
     delay: 0.4
     
    })
    
})

play.addEventListener('mouseleave',function(){
    play1.pause()
  gsap.to(".intro",{
       opacity:1,
       delay: 0.1
    })
    
})
var tl = gsap.timeline()
tl.from("#loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1
})
tl.to("#loader h3",{
    opacity:0,
    x:-40,
    stagger:0.1,
    duration:1
})
tl.to("#loader",{
    opacity:0,
    display:"none"
})


let paragraph = document.querySelector('.text');
let text = 'Bit-Sindri'.repeat(300);
paragraph.textContent = text;
paragraph.innerHTML = paragraph.textContent.replace(/\S/g,"<span>$&</span>")
let paragraph1 = document.querySelector('.text2');
let text1 = 'Bit-Sindri'.repeat(300);
paragraph1.textContent = text1;
paragraph1.innerHTML = paragraph1.textContent.replace(/\S/g,"<span>$&</span>")

gsap.from("#aboutbit",{
  opacity:0,
  duration:2,
  scrollTrigger:"#aboutbit",
  yoyo:false
})
var swiper = new Swiper(".swiper",{
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    initialSlide:2,
    speed: 600,
    preventClicks: true,
    slidesPerView: "auto",
    coverflowEffects: {
        rotate: 0,
        stretch: 80,
        depth: 350,
        modifier: 1,
        slideShadows: true,
    },
    on: {
        click(event){
            swiper.slideTo(this.clickedIndex);
        },
    },
    pagination: {
        el: ".swiper-pagination"
    }
})
gsap.from(".heading",{
    opacity:0,
    y:200,
    duration: 1,
    scrollTrigger: ".heading"
})
gsap.from(".motto",{
    opacity:0,
    duration:2,
    scrollTrigger: ".motto",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none none"
})
gsap.from("#gallery",{
  opacity:0,
  duration:2,
  delay:0.5,
  x:500,
  y:200,
  scrollTrigger: ".swiper-head",
 
})

gsap.from("#imageabout",{
  scrollTrigger: "#imageabout",
  stagger:1,
  opacity:0,
  duration:2,
  x:500
})

gsap.from(".aboutbit")
particlesJS("particles-js", {
    particles: {
      number: {
        value: 160,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value : ["#ffffff","#192bce","#08a06b"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.6,
        random: false,
        anim: {
          enable: false,
          speed: 10,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: true,
          speed: 4,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: false,
    },
      move : {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "none",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
   retina_detect: true
  });

gsap.from("#information1",{
  stagger:0.1,
  duration:2,
  scrollTrigger: "#information"
})
gsap.from("page4 h1",{
  y:50,
  scrollTrigger:{
    trigger: "#page4 h1",
    scroller:"body",
    start: "top 75%",
    end: "top 70%",
    scrub:3
  }
})
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".glow-button");

  button.addEventListener("click", () => {
    button.style.backgroundColor = "#FF5733"; 
  });
});

