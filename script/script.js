gsap.registerPlugin(ScrollTrigger) ;
gsap.registerPlugin(TextPlugin);
//gsap.registerPlugin(MorphSVGPlugin)
//gsap.registerPlugin(DrawSVGPlugin);;
gsap.registerPlugin(MotionPathPlugin);



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

const Titre = gsap.timeline({
    scrollTrigger: {
      trigger: "#chapitre1", 
      start: "top top",   
      end: "bottom bottom",    
        scrub: 1,  
        markers: false,
      
    }
  });
  
 Titre.from("#titre", {
    opacity: 0,          
    x: -100,   
    duration:7,      
    ease: "power2.inOut" 
  });

  const soleil = gsap.timeline({
    scrollTrigger: {
      trigger: "#chapitre1",
      start: "top top",
      end: "bottom -40%",
      scrub: 1,

      pin:true,
      
    },
  });
  
  soleil.to("#soleil", {
    x: "30vw",
    duration:3, 
  });
  



  const devantnuit = gsap.timeline({
    scrollTrigger: {
      trigger: "#chapitre1",
      start: "top 50%",
      end: "bottom -110%",
      markers: false,
      duration: 1,
      scrub: 2,
    },
  });
  
  devantnuit.to("#devantnuit", {
    y: "10%",
    duration: 3,
    ease: "power2.inOut",
  });
  
  const milieunuit = gsap.timeline({
    scrollTrigger: {
      trigger: "#chapitre1",
      start: "top top",
      end: "bottom -110%",
      markers: false,
      duration: 3, // Réduisez la durée de cette animation pour que le milieu tombe en premier
      scrub: 2,
    },
  });
  
  milieunuit.to("#milieunuit", {
    y: "10%",
    duration: 1.5,
    ease: "power2.inOut",
  });
  
  // Réglez le retard de l'animation devant nuit pour qu'elle commence après l'animation milieu nuit
  devantnuit.delay(1);
  
  


gsap.to(".section1", {
  backgroundPosition: "50% 110%",
  ease: "none",
  scrollTrigger: {
      trigger: ".section1",
      start: "top top",
      end: "bottom -40%",
      scrub: 1, 
      duration:4,
  }
});

  //chapitre1-2------------------------------------------

  const Titre2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#chapitre1-2",
        start: "top top",
        end: "bottom -120%",
        scrub: 1,
  
    }
});

Titre2.fromTo(".story-text",
    { opacity: 0 }, // from
    { opacity: 1, duration: 1 } // to
)


const lune = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre1-2",
    start: "top top",
    end: "bottom -120%",
    scrub: 1,
    pin:true,
    
  },
});

lune.to("#lune", {
  x: "-40vw",
  duration:3, 
});


  //chapitre2------------------------------------------

  const timeline3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#chapitre2",
      start: "top top",   
      end: "bottom -120%", 
      scrub: 1,
   pin:true,
        
    }
  });
  

  timeline3.from("#z1", { opacity: 0, duration: 0.2 })
          .from("#z2", { opacity: 0, duration: 0.2 })
          .from("#z3", { opacity: 0, duration: 0.2 });

         
timeline3.from(".story-text2", { opacity: 0, duration: 1 });

timeline3.fromTo(".sprite1", { 
  scale: 0, 
  
}, { 
  scale: 0.8, 

  duration: 0.8 
});

  //chapitre3------------------------------------------

 gsap.set(["#etoile3", "#etoile2", "#etoile1" ],{drawSVG:"0% 0%"});
function anim()    {
  gsap.timeline()/*
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
*/
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

gsap.to(".section3", {
  backgroundPosition: "50% 90%",
  ease: "none",
  scrollTrigger: {
      trigger: ".section3",
      start: "top top",
      end: "bottom -10%",
      scrub: 1,
pin: true,

  }
});

  //chapitre4------------------------------------------

  const timeline4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#chapitre4", 
      start: "top top",  
      end: "bottom -120%", 
      scrub: 1,
      pin:true,
    }
  });
  
 
  timeline4.fromTo("#champignon", {
    skewX: 0, 
    skewY: 0  
  }, {
    skewX: 9,
    skewY: 15, 
    duration: 4 
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


/*let to = gsap.to("#papillon", { 
 morphSVG: "#point-noir"
});


document.addEventListener("click", function () {
 console.log("reset");
 to.progress(0).pause();
 const myTimeout = setTimeout(function () {
    to.play();
  }, 1000);
}); */

  //chapitre5------------------------------------------

  const timeline5 = gsap.timeline({
    scrollTrigger: {
        trigger: '#chapitre5', 
        start: 'top top', 
        end: 'bottom -120%', 
        scrub: 1,
        pin:true,
  
    }
  });
  
  
  timeline5.from('.perschap5', {
    x: -600, 
    duration: 4 
  });
  
  
  timeline5.from('.feu1, .feu2', {
    scale: 0,
    duration: 4
  }, '-=1'); 

  //chapitre6------------------------------------------

  const   timeline6 = gsap.timeline({
    scrollTrigger: {
        trigger: "#chapitre6", 
        start: "top top", 
        end: "botttom -120%", 
        scrub: 1,
        pin:true,
    }
  });
  
  
  timeline6.fromTo("#textillusion", {
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
        end: "bottom -120%", 
        scrub: 1,
        pin:true,
    }
  });
  
  
  timeline7.fromTo(".perschap8dort", {opacity: 1}, {opacity: 0}); 
  timeline7.to(".sprite3", {opacity: 1}, "<"); 














  
 












































