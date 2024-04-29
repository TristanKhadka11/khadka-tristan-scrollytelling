
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

  timelineTitre.from("#lune", {
    opacity: 0,
    x: window.innerWidth,
    duration: 3,
    ease: "power2.inOut"
  });



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

  const timeline4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#chapitre5", 
      start: "top center",   
      end: "center center",  
      scrub: true            
    }
  });
  

  

  timeline4.to("#porte", {
    x: tremblementX, 
    y: tremblementY,
    duration: 0.1,   
    repeat: -1,      
    yoyo: true       
  });

  const timeline5 = gsap.timeline({
    scrollTrigger: {
      trigger: "#chapitre1-2",
      start: "top center",   
      end: "center center", 
      scrub: true            
    }
  });

  timeline5.from(".story-text", { opacity: 0, duration: 1 });
  




  









