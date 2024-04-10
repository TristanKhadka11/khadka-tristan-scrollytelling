// Import de la bibliothèque GSAP et ScrollTrigger (assurez-vous qu'ils sont correctement liés dans votre HTML)
gsap.registerPlugin(ScrollTrigger);

// Animation de l'icône en boucle
gsap.to('.scroll-down img', {
    duration: 1,
    y: 10,
    yoyo: true,
    repeat: -1
});
