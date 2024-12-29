
function toggleMenu() {
const menu = document.querySelector(".menu-links");
const icon = document.querySelector(".hamburger-icon");
menu.classList.toggle("open");
icon.classList.toggle("open");
}


var typed = new Typed("#auto-type",{
    strings:["FRONTEND DEVELOPER","WEB DEVELOPER" , "YOU TUBER" , "DESIGNER" , "GAMER" ],
    typeSpeed:50,
    backSpeed:90,
    loop:true,
});


var t1 = gsap.timeline()

t1.from(".logo",{
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 0.5
})

t1.from("li",{
    opacity: 0,
    y: -13,
    duration: 1,
    stagger: 0.3
})

gsap.to(".arrow",{
    y: -20,
    duration: 2,
    delay: 1,
    repeat: -1,
    yoyo: true,
})
