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
var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
       elem.addEventListener("mouseenter",function(){
          elem.style.backgroundColor ="red"
          elem.style.color = "black"
       })
       elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        
       })
})
document.addEventListener("DOMContentLoaded", () => {
    
    gsap.to(".overlay", {
      duration: 5, 
      scaleX: 0, 
      transformOrigin: "left center",
      ease: "power2.out", 
      onComplete: () => {
        document.querySelector(".overlay").style.display = "none"; 
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    
    gsap.to(".overlay1", {
      duration: 5,
      delay:3,
      scaleX: 0, 
      transformOrigin: "left center",
      ease: "power2.out", 
      onComplete: () => {
        document.querySelector(".overlay").style.display = "none"; 
      }
    });
  });
gsap.from("#text-div h1",{
    color: "#EDBFFF",
    duration: 2,
    delay:2.5,
    y:30,
    stagger:1,
    opacity:0

})
