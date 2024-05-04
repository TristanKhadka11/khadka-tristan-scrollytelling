
//sprite


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

//chapitre1

const timelineTitre = gsap.timeline({
    scrollTrigger: {
      trigger: "#chapitre1", 
      start: "top center",   
      end: "center center", 
      scrub: true            
    }
  });
  

  timelineTitre.from("#titre", {
    opacity: 0,          
    x: -100,           
    duration: 1,        
    ease: "power2.inOut" 
  });


  timelineTitre.to("#soleil", {
    x: -10000, 
    duration: 3,           
    ease: "power2.inOut"  
  });



  

  //chapitre1-2


  const timeline4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#chapitre1-2", 
      start: "top center",   
      end: "center center", 
      scrub: true            
    }
  });

  timeline4.from("#lune", {
    opacity: 0,
    x: window.innerWidth,
    duration: 3,
    ease: "power2.inOut"
  });







  //chapitre2

const timeline2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#chapitre2",
      start: "top center",   
      end: "center center", 
      scrub: true            
    }
  });
  

  timeline2.from("#z1", { opacity: 0, duration: 0.5 })
          .from("#z2", { opacity: 0, duration: 0.5 })
          .from("#z3", { opacity: 0, duration: 0.5 });

         
timeline2.from(".story-text2", { opacity: 0, duration: 1 });

timeline2.fromTo(".sprite1", { 
  scale: 0, 
  
}, { 
  scale: 0.8, 

  duration: 0.5 
});


//chapitre4

const timeline3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#chapitre4", 
      start: "top center",  
      end: "center center", 
      scrub: true           
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

    
  //chapitre1-2 
  
  const timeline5 = gsap.timeline({
    scrollTrigger: {
      trigger: "#chapitre1-2",
      start: "top center",   
      end: "center center", 
      scrub: true            
    }
  });

  timeline5.from(".story-text", { opacity: 0, duration: 1 });

 // Importation de la bibliothèque GSAP et du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);


let speed = 100;


function animateDayParallax() {
    gsap.to("#arrierejour, #milieujour, #devantjour", { y: 3 * speed, ease: "power1.in" });
}


function animateNightParallax() {
    gsap.to("#arrierenuit, #milieunuit, #devantnuit", { y: 3 * speed, ease: "power1.in" });
}


function dayToNightTransition() {
    animateNightParallax(); // Animation de départ du parallaxe de nuit
    gsap.to("#arrierenuit, #milieunuit, #devantnuit", { opacity: 1, duration: 2 }); // Faire apparaître les éléments de nuit avec une durée de fondu de 2 secondes
    gsap.to("#arrierejour, #milieujour, #devantjour", { opacity: 0, duration: 2 }); // Faire disparaître les éléments de jour avec une durée de fondu de 2 secondes
    animateDayParallax(); // Animation du parallaxe des éléments de jour
}


function nightToDayTransition() {
    animateDayParallax(); // Animation de départ du parallaxe du jour
    gsap.to("#arrierenuit, #milieunuit, #devantnuit", { opacity: 0, duration: 2 }); // Faire disparaître les éléments de nuit avec une durée de fondu de 2 secondes
    gsap.to("#arrierejour, #milieujour, #devantjour", { opacity: 1, duration: 2 }); // Faire apparaître les éléments de jour avec une durée de fondu de 2 secondes
    animateNightParallax(); // Animation du parallaxe des éléments de nuit
}


ScrollTrigger.create({
  trigger: ".section1",
  start: "top 50%", // Déclencher la transition à mi-chemin de la section
  end: "bottom 100%",
  onEnter: dayToNightTransition, // Transition du jour à la nuit
  onLeaveBack: nightToDayTransition, // Transition de la nuit au jour
  scrub: true
});


animateDayParallax(); 

gsap.to(".section3", {
  backgroundPosition: "50% 120%",
  ease: "none",
  scrollTrigger: {
      trigger: ".section3",
      start: "top bottom",
      end: "bottom top",
      scrub: true,

  }
});




var timeline6 = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre1", // Déclencheur lorsque vous atteignez le bas de la page
    start: "10%", // Déclencher lorsque vous êtes au milieu de la fenêtre
    end: "80%", // Fin de la zone de déclenchement
    scrub: true, // L'animation se synchronise avec le défilement
    markers: true // Affiche les marqueurs pour le débogage
  }
});

// Animation de l'élément #devantnuit
timeline6.to("#devantnuit", {
  y: "50%", // Descendre l'élément devant jusqu'au milieu de la page
  duration: 1, // Durée de l'animation en secondes
  ease: "power2.inOut" // Fonction d'animation
});

// Animation de l'élément #milieunuit
timeline6.to("#milieunuit", {
  y: "60%", // Descendre l'élément milieu jusqu'au milieu de la page
  duration: 1, // Durée de l'animation en secondes
  ease: "power2.inOut" // Fonction d'animation
});







