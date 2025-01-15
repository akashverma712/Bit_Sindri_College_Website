/*For the loader page*/
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
/*For the heading*/
gsap.from("#admission",{
    delay:2.5,
    duration:4,
    y:30,
    opacity:0,
    color: "black"
})
