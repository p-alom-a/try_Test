document.addEventListener('DOMContentLoaded', () => {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Toggle dropdown visibility on click
    dropbtn.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default anchor behavior
        dropdownContent.classList.toggle('show');
    });

    // Close dropdown if clicked outside
    window.addEventListener('click', (event) => {
        if (!event.target.matches('.dropbtn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });

    // Change background color on scroll
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("body", {
        scrollTrigger: {
            trigger: ".top",
            start: "bottom 50%",
            scrub: 3,
            markers: false,
            onEnter: () => gsap.to("body", { backgroundColor: "white", duration: 1 }), // Duration can be adjusted
            onLeaveBack: () => gsap.to("body", {  backgroundColor: "#000E3D", duration: 1 }) // Duration can be adjusted
        }
    });

    // Opacité de img-hero à zéro en même temps que le changement de background color
    gsap.to(".img-hero", {
        scrollTrigger: {
            trigger: ".top",
            start: "bottom 50%",
            scrub: 3,
            markers: false,
            onEnter: () => gsap.to(".img-hero", { opacity: 0, duration: 1 }), // Duration can be adjusted
            onLeaveBack: () => gsap.to(".img-hero", { opacity: 1, duration: 1 }) // Duration can be adjusted
        }
    });
});



// Créer l'instance SplitType
let spliText = new SplitType(".titre-apropos", { types: "chars" });
let char = spliText.chars;

// Animation des caractères avec GSAP
gsap.from(char, {
    yPercent: 130,
    stagger: 0.02,
    ease: "back.out",
    duration: 1,
    scrollTrigger: {
        trigger: ".top",
        start: "bottom 40%",  // Commence l'animation un peu plus haut
        end: "bottom 20%", 
        scrub: true,
        markers: true,
        toggleActions: "play complete reverse reset"
    }
});

// TEST
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq=>{
faq.addEventListener("click",()=>{
faq.classList.toggle("active");
})
})
