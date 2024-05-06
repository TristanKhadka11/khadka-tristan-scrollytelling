
//sprite


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MorphSVGPlugin);



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

  //chapitre1------------------------------------------

const timelineTitre = gsap.timeline({
    scrollTrigger: {
      trigger: "#chapitre1", 
      start: "top top",   
      end: "110% 110%", 
        pin: true,      
        scrub: 1,  
        markers: true
    }
  });
  

  timelineTitre.from("#titre", {
    opacity: 0,          
    x: -100,           
    scrub: 1,
    ease: "power2.inOut" 
  });


  timelineTitre.to("#soleil", {
    x: -5000, 
    duration: 3,           
    ease: "power2.inOut",  
  
  });



  var timeline6 = gsap.timeline({
    scrollTrigger: {
        trigger: "#chapitre1", 
        start: "top top", 
        end: "bottom bottom",
        scrub: 1,
        pin: true, 
       // markers:true,
      
    }
  });
  
  
  timeline6.to("#devantnuit", {
    y: "10%", 
    duration: 1, 
    ease: "power2.inOut" 
  });
  
  
  timeline6.to("#milieunuit", {
    y: "10%", 
    duration: 1.5,
    ease: "power2.inOut" 
  }, '-=1'); 

  



let speed = 100;


function animateDayParallax() {
    gsap.to("#arrierejour, #milieujour, #devantjour", { y: 3 * speed, ease: "power1.in" });
}


function animateNightParallax() {
    gsap.to("#arrierenuit, #milieunuit, #devantnuit", { y: 0 * speed, ease: "power1.in" });
}


function dayToNightTransition() {
    animateNightParallax(); // Animation de départ du parallaxe de nuit
    gsap.to("#arrierenuit, #milieunuit, #devantnuit", { opacity: 1, duration: 2 }); // Faire apparaître les éléments de nuit avec une durée de fondu de 2 secondes
    gsap.to("#arrierejour, #milieujour, #devantjour", { opacity: 0, duration: 2 }); // Faire disparaître les éléments de jour avec une durée de fondu de 2 secondes
    animateDayParallax(); 
}


function nightToDayTransition() {
    animateDayParallax(); // Animation de départ du parallaxe du jour
    gsap.to("#arrierenuit, #milieunuit, #devantnuit", { opacity: 0, duration: 2 }); // Faire disparaître les éléments de nuit avec une durée de fondu de 2 secondes
    gsap.to("#arrierejour, #milieujour, #devantjour", { opacity: 1, duration: 2 }); // Faire apparaître les éléments de jour avec une durée de fondu de 2 secondes
    animateNightParallax();
}


ScrollTrigger.create({
  trigger: ".section1",
  start: "-120vh top", 
  end: "bottom bottom",
  onEnter: dayToNightTransition, 
  onLeaveBack: nightToDayTransition,
  scrub: 1,
  pin: true, 
});


animateDayParallax(); 

gsap.to(".section3", {
  backgroundPosition: "50% 120%",
  ease: "none",
  scrollTrigger: {
      trigger: ".section3",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      pin: true, 

  }
});

gsap.to(".section1", {
  backgroundPosition: "50% 110%",
  ease: "none",
  scrollTrigger: {
      trigger: ".section1",
      start: "center center",
      end: "bottom top",
      scrub: 1,
      pin: true, 
      
  }
});

  //chapitre1-2------------------------------------------

  const timeline5 = gsap.timeline({
    scrollTrigger: {
      trigger: "#chapitre1-2",
      start: "top top",   
      end: "bottom bottom",  
      scrub: 1,
      pin: true,  
      
   
    }
  });

  timeline5.from(".story-text", { opacity: 0, duration: 0.5 });

  const timeline4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#chapitre1-2", 
      start: "top top",   
      end: "bottom bottom",  
      scrub: 1,     
      pin: true,
     //markers: true  ,     
    }
  });

  timeline4.from("#lune", {
    opacity: 0,
    x: window.innerWidth,
    duration: 1,
    ease: "power2.inOut",
    pin: true, 
  });



  //chapitre2------------------------------------------

  const timeline2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#chapitre2",
      start: "top top",   
      end: "bottom bottom", 
      scrub: 1,
      pin: true, 
        
    }
  });
  

  timeline2.from("#z1", { opacity: 0, duration: 0.2 })
          .from("#z2", { opacity: 0, duration: 0.2 })
          .from("#z3", { opacity: 0, duration: 0.2 });

         
timeline2.from(".story-text2", { opacity: 0, duration: 1 });

timeline2.fromTo(".sprite1", { 
  scale: 0, 
  
}, { 
  scale: 0.8, 

  duration: 0.5 
});

  //chapitre3------------------------------------------

  gsap.set(["#etoile3", "#etoile2", "#etoile1" ],{drawSVG:"0% 0%"});
function anim() {
  gsap.timeline()
  .fromTo(
    "#etoile3",
     {
      drawSVG:"0%"
    },
    {
      drawSVG:"100%",
      duration: 1
    }
    
  )

  .fromTo(
    "#etoile2",
     {
      drawSVG:"0% 0%"
    },
    {
      drawSVG:"0% 100%",
      duration: 1
    }
    
  )

  .fromTo(
    "#etoile1",
     {
      drawSVG:"0% 0%"
    },
    {
      drawSVG:"0% 100%",
      duration: 1
    }
    
  )

  .fromTo(
    ["#etoile3", "#etoile2", "#etoile1"],
    {
      fillOpacity: 0
    },
    {
      fillOpacity: 1,
      duration: 1
    }
  );
}

const btn=document.querySelector("#go");
btn.addEventListener("click", anim);

gsap.to(".section3", {
  backgroundPosition: "50% 100%", 
  ease: "none",
  scrollTrigger: {
      trigger: ".section3",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      pin: true, 
  }
});

  //chapitre4------------------------------------------

  const timeline3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#chapitre4", 
      start: "top top",  
      end: "bottom bottom", 
      scrub: 1,
       pin: true,          
    }
  });
  
 
  timeline3.fromTo("#champignon", {
    skewX: 0, 
    skewY: 0  
  }, {
    skewX: 9,
    skewY: 15, 
    duration: 1 
  });

  gsap.to("#papillon", {
    duration: 4,
    repeat: 12,
    repeatDelay: 0.5,
    yoyo: true,
    ease: "power1.inOut",
  
    motionPath: {
      path: "#courbe",
      align: "#courbe",
      autoRotate: true, 
      alignOrigin: [0.5, 0.5]
    }
  });


let to = gsap.to("#papillon", { 
 morphSVG: "#point-noir"
});


document.addEventListener("click", function () {
 console.log("reset");
 to.progress(0).pause();
 const myTimeout = setTimeout(function () {
    to.play();
  }, 1000);
});

  //chapitre5------------------------------------------

  const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: '.story-text5', 
        start: 'top top', 
        end: 'bottom bottom', 
        scrub: 1,
        pin: true, 
  
    }
  });
  
  
  timeline.from('.perschap5', {
    x: -600, 
    duration: 0.1 
  });
  
  
  timeline.from('.feu1, .feu2', {
    scale: 0,
    duration: 0.5
  }, '-=1'); 

  //chapitre6------------------------------------------

  const textillu = gsap.timeline({
    scrollTrigger: {
        trigger: "#chapitre6", 
        start: "top top", 
        end: "botttom bottom", 
        scrub: 1,
        pin: true, 
    }
  });
  
  
  textillu.fromTo("#textillusion", {
      y: "100%",     
      opacity: 0    
  }, {
      y: "0%",       
      opacity: 1,   
      duration: 1   
  });

  //chapitre7------------------------------------------

  const timeline7 = gsap.timeline({
    scrollTrigger: {
        trigger: "#chapitre7", 
        start: "top top", 
        end: "bottom bottom", 
        scrub: 1,
        pin: true, 
    }
  });
  
  
  timeline7.fromTo(".perschap8dort", {opacity: 1}, {opacity: 0}); 
  timeline7.to(".sprite3", {opacity: 1}, "<"); 














  
 












































