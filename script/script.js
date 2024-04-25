
gsap.registerPlugin(ScrollTrigger);


gsap.to('.scroll-down img', {
    duration: 1,
    y: 10,
    yoyo: true,
    repeat: -1
});

gsap.to('.scroll-text', {
    duration: 1,
    y: 10,
    yoyo: true,
    repeat: -1
});


let timer;

window.addEventListener('scroll', function() {
   
    document.body.classList.add('is-scrolling');
   

    clearTimeout(timer);
    var timer = setTimeout(function() {
        document.body.classList.remove('is-scrolling');
    }, 100);
});








