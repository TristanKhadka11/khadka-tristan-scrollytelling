
gsap.registerPlugin(ScrollTrigger);


gsap.to('.scroll-down img', {
    duration: 1,
    y: 10,
    yoyo: true,
    repeat: -1
});
