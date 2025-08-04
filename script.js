function voidAnimation() {
    let videocon = document.querySelector("#video-container");
    let playbtn = document.querySelector("#play");

    videocon.addEventListener("mouseenter", function(){
    playbtn.style.opacity = 1;
    playbtn.style.scale = 1;
    
    });

    videocon.addEventListener("mouseleave", function(){
    playbtn.style.opacity = 0;
    playbtn.style.scale = 0;
    });

    videocon.addEventListener("mousemove", function(dets){
    gsap.to(playbtn, {
        left: dets.x-80,
        right: dets.y-80,


    })
})
};
voidAnimation();


//for the animation of h1 heading
function headingAnim() {
    gsap.from("#page1 h1",{
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    stagger: 0.3

    })
    //for the animation of video-container animation
    gsap.from("#page1 #video-container", {
        scale: 0.9,
        opacity: 0,
        delay: 1.2,
        duration: 0.5,
    })
}
headingAnim();

function movecurseor() {
    document.addEventListener("mousemove", function(dets){
        gsap.to("#cursor", {

            left: dets.x,
            top: dets.y,
        })
    })

  
    

}
movecurseor();


function navClick() {
    let Body = document.querySelector("body");
    let Nav = document.querySelector("nav");
    let shop = document.querySelector("shop1");
    shop.addEventListener("onclick", () =>{
        shop.classList.toogle("active");
    })
}
navClick();



const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


